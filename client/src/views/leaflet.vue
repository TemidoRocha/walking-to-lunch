<template>
  <div>
    <leafletMap />
    <hikeCards />
  </div>
</template>

<script>
import hikeCards from '../components/hikeCards/hikeCards.vue';
import leafletMap from '../components/leafletMap/leafletMap';
export default {
  name: 'Leaflet',
  components: {
    leafletMap,
    hikeCards,
  },
};
</script>

<style></style>
