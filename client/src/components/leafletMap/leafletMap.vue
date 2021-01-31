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
            <l-popup :id="hike.code" :options="popupOptions">
              <v-card color="#385F73" dark>
                <v-row no-gutters>
                  <v-col cols="12">
                    <v-card-title class="headline">
                      {{ hike.name }}
                    </v-card-title>
                    <v-card-subtitle class="pb0"> {{ hike.code }}</v-card-subtitle>
                  </v-col>
                  <v-col cols="12">
                    <v-list dense color="#385F73" dark>
                      <v-list-item-group>
                        <v-list-item>
                          <v-list-item-content>
                            <v-list-item-title class="listItemText"
                              >{{ `${$t('typology')}` }}:
                              {{ `${$t(hike.typology)}` }}</v-list-item-title
                            >
                          </v-list-item-content>
                        </v-list-item>

                        <v-list-item>
                          <v-list-item-content>
                            <v-list-item-title class="listItemText"
                              >{{ `${$t('distance')}` }}: {{ hike.distance }}
                              {{ hike.measure }}</v-list-item-title
                            >
                          </v-list-item-content>
                        </v-list-item>

                        <v-list-item>
                          <v-list-item-content>
                            <v-list-item-title class="listItemText"
                              >{{ `${$t('duration')}:` }} {{ hike.duration[0] }}
                              {{
                                hike.duration[1] ? `, ${hike.duration[1]}` : ''
                              }}</v-list-item-title
                            >
                          </v-list-item-content>
                        </v-list-item>

                        <v-list-item>
                          <v-list-item-content>
                            <v-row no-gutters>
                              <v-col class="pbt0" cols="6"
                                ><v-list-item-title
                                  class="cardButtonText"
                                  @click="downloadHike(hike.url)"
                                  >{{ `${$t('download')}` }}</v-list-item-title
                                ></v-col
                              >
                              <v-col class="pbt0" cols="6"
                                ><v-list-item-title class="cardButtonText" @click="openPdf(hike)">{{
                                  $t('see pdf')
                                }}</v-list-item-title></v-col
                              >
                            </v-row>
                          </v-list-item-content>
                        </v-list-item>
                      </v-list-item-group>
                    </v-list>
                  </v-col>
                </v-row>
              </v-card>
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
    popupOptions: {
      minWidth: '300',
      maxWidth: '500',
      className: 'customPopup',
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
      this.$store.commit('filterHikingCards', event.target._popup._content.id);
    },
    async openPdf(hike) {
      this.selectedHike = hike;
      this.pdfUrl = await this.getHikePdf(hike.url);
      this.pdfDialog = true;
    },
  },
};
</script>

<style scoped>
/* not working the ocmmented code bellow */
/* .customPopup .leaflet-popup-content-wrapper {
  padding: 0% !important;
}
.customPopup .leaflet-popup-content-wrapper .leaflet-popup-content {
  margin: 0% !important;
}
.customPopup .leaflet-popup-tip-container {
  background-color: #385f73;
} */
.v-card__title {
  padding: 8px 16px;
}
.cardButtonText {
  font-size: 0.8em;
  text-align: center;
}
.listItemText {
  font-size: 1rem !important;
  font-weight: 500 !important;
  line-height: 1rem !important;
}
</style>
