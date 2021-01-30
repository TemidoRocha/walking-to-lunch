<template>
  <v-container class="grey lighten-5 mb-6" fluid>
    <v-row v-show="!pdfDialog" no-gutters style="height: 58vh;">
      <v-col>
        <l-map ref="myMap" style="width: 100%" :zoom="zoom" :center="center">
          <l-tile-layer :url="url"></l-tile-layer>
          <l-circle-marker
            v-for="hike in getHikingsSpots"
            :key="hike._id"
            :lat-lng="hike.coordinates"
            :radius="circle.radius"
            :color="circle.color[hike.dificulty]"
            @click="popupTriggered"
          >
            <l-popup>
              <v-card-subtitle>
                {{ hike.code }}
              </v-card-subtitle>
              <v-card-text>
                {{ hike.name }}
              </v-card-text>
              <v-card-text>
                {{ $t('distance') }}: {{ hike.distance }} | {{ $t('duration') }}:
                {{ hike.duration[0] }}
                {{ hike.duration[1] ? `, ${hike.duration[1]}` : '' }}</v-card-text
              >
              <v-btn @click="downloadHike(hike.url)">download</v-btn>
              <v-btn @click="openPdf(hike)">see pdf</v-btn>
            </l-popup>
          </l-circle-marker>
        </l-map>
      </v-col>
    </v-row>
    <pdfView
      v-if="pdfDialog"
      :pdfDialog="pdfDialog"
      :pdfSrc="pdfUrl"
      :selectedHike="selectedHike"
      @closeDialog="pdfDialog = false"
    ></pdfView>
  </v-container>
</template>

<script>
import downloadHike from '../../mixins/functions/downloadHike';
import { LCircleMarker, LMap, LPopup, LTileLayer } from 'vue2-leaflet';
import { mapGetters } from 'vuex';
import pdfView from '../pdfView/pdfView.vue';

export default {
  name: 'App',
  components: {
    LCircleMarker,
    LMap,
    LPopup,
    LTileLayer,
    pdfView,
  },
  mixins: [downloadHike],
  data: () => ({
    // map var
    url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    zoom: 6,
    center: [39.673561490554924, -8.146644540267728],
    bounds: null,
    circle: {
      radius: 6,
      color: {
        low: 'green',
        medium: 'yellow',
        high: 'red',
      },
    },
    // hiking spots
    hikingSpots: [],
    // pdf var
    pdfUrl: '',
    selectedHike: {},
    pdfDialog: false,
  }),
  computed: {
    ...mapGetters(['getHikingsSpots']),
  },
  methods: {
    popupTriggered(event) {
      this.$store.commit('filterHikingCards', event.target._popup._content.firstChild.innerText);
    },
    async openPdf(hike) {
      this.selectedHike = hike;
      this.pdfUrl = await this.getHikePdf(hike.url);
      this.pdfDialog = true;
    },
  },
};
</script>
