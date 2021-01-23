<template>
  <div>
    <toolbar />
    <leafletMap />
    <hikeCards />
  </div>
</template>

<script>
import HikeCards from './components/hikeCards/hikeCards.vue';
import leafletMap from './components/leafletMap/leafletMap';
import toolbar from './components/toolbar/toolbar';

export default {
  name: 'App',
  components: {
    leafletMap,
    toolbar,
    HikeCards,
  },
  created() {
    this.$store.dispatch('setAllHikingSpots');
  },
};
</script>

<style>
.maxwidth100 {
  max-width: 100%;
}
</style>
