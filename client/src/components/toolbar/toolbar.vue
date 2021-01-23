<template>
  <v-card color="grey lighten-4" flat height="75px" tile>
    <v-app-bar dense>
      <v-toolbar-title v-if="$vuetify.breakpoint.name != 'xs' || !isCollapse">{{
        $t('walk to lunch')
      }}</v-toolbar-title>
      <v-spacer v-if="$vuetify.breakpoint.name != 'xs' || !isCollapse"></v-spacer>

      <v-btn v-if="$vuetify.breakpoint.name == 'xs'" icon @click="toggleXs">
        <v-icon v-if="!isCollapse">mdi-magnify</v-icon>
        <v-icon v-else>mdi-arrow-left</v-icon>
      </v-btn>
      <template v-if="$vuetify.breakpoint.name != 'xs' || isCollapse">
        <v-text-field
          v-model="searchHikingSpot"
          hide-details
          single-line
          @keyup="searchHikes"
        ></v-text-field>
        <v-btn icon @click="searchHikes">
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
      </template>
      <i18n />
    </v-app-bar>
  </v-card>
</template>

<script>
import i18n from './locale-changer';
export default {
  name: 'toolbar',
  components: {
    i18n,
  },
  data: () => ({
    isCollapse: false,
    searchHikingSpot: '',
  }),
  methods: {
    // for xs screens
    toggleXs() {
      this.isCollapse = !this.isCollapse;
    },
    // search hikes
    searchHikes() {
      this.$store.commit('filterHikes', this.searchHikingSpot);
    },
  },
};
</script>
