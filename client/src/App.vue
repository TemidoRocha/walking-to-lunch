<template>
  <div>
    <toolbar @searchHikes="searchHikes" />
    <leafletMap ref="leafletMap" />
  </div>
</template>

<script>
import leafletMap from './components/leafletMap/leafletMap';
import toolbar from './components/toolbar/toolbar';

export default {
  name: 'App',
  components: {
    leafletMap,
    toolbar,
  },
  methods: {
    searchHikes(searchHikingSpot) {
      /** when vuex implemented this logic disappears */
      this.$refs.leafletMap.searchHikes(searchHikingSpot);
    },
  },
};
</script>

<style></style>
