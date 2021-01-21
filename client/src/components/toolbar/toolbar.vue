<template>
  <v-card color="grey lighten-4" flat height="75px" tile>
    <v-toolbar dense>
      <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->

      <v-toolbar-title>{{ $t('walk to lunch') }}</v-toolbar-title>

      <v-spacer></v-spacer>
      <v-text-field v-model="searchHikingSpot" hide-details @keyup="searchHikes"></v-text-field>
      <v-btn icon @click="searchHikes">
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <i18n />
    </v-toolbar>
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
    searchHikingSpot: '',
  }),
  methods: {
    searchHikes() {
      this.$emit('searchHikes', this.searchHikingSpot);
    },
  },
};
</script>
