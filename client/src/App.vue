<template>
  <div>
    <toolbar @searchHikes="searchHikes" />

    <v-container class="grey lighten-5 mb-6" fluid>
      <v-row style="height: 100vh;">
        <v-col>
          <l-map ref="myMap" style="height: 80%; width: 100%" :zoom="zoom" :center="center">
            <l-tile-layer :url="url"></l-tile-layer>
            <l-circle-marker
              v-for="hike in hikingSpots"
              :key="hike._id"
              :lat-lng="hike.coordinates"
              :radius="circle.radius"
              :color="circle.color"
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
                  {{ hike.duration }}</v-card-text
                >
                <v-btn @click="downloadHike(hike.url)">download</v-btn>
              </l-popup>
            </l-circle-marker>
          </l-map>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { LCircleMarker, LMap, LPopup, LTileLayer } from 'vue2-leaflet';
import toolbar from './components/toolbar/toolbar';

export default {
  name: 'App',
  components: {
    LCircleMarker,
    LMap,
    LPopup,
    LTileLayer,
    toolbar,
  },
  data: () => ({
    publicPath: process.env.BASE_URL,
    // map var
    url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    zoom: 6,
    center: [39.673561490554924, -8.146644540267728],
    bounds: null,
    circle: {
      radius: 6,
      color: 'red',
    },
    // hiking spots
    hikingSpotsApi: [],
    hikingSpots: [],
  }),
  methods: {
    searchHikes(searchText) {
      if (searchText) {
        this.hikingSpots = this.hikingSpotsApi.filter((x) =>
          x.searchWords.some((e) => e.toLowerCase().indexOf(searchText.toLowerCase()) >= 0)
        );
      } else {
        this.hikingSpots = this.hikingSpotsApi;
      }
    },
    async downloadHike(url) {
      try {
        const pdf = await this.axios.get(`/api/downloadPdf/${url}`, {
          responseType: 'arraybuffer',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/pdf',
          },
        });
        var fileURL = window.URL.createObjectURL(new Blob([pdf.data]));
        var fileLink = document.createElement('a');
        fileLink.href = fileURL;
        fileLink.setAttribute('download', `${url}.pdf`);
        document.body.appendChild(fileLink);
        fileLink.click();
      } catch (error) {
        console.error(error);
      }
    },
  },
  async created() {
    try {
      const hikesData = await this.axios.get('/api/all-hikings');
      this.hikingSpotsApi = [...hikesData.data.data];
      this.hikingSpots = [...hikesData.data.data];
    } catch (error) {
      console.error(error);
    }
  },
};
</script>

<style></style>
