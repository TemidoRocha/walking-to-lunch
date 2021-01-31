<template>
  <div>
    <v-app>
      <toolbar />
      <router-view></router-view>
    </v-app>
  </div>
</template>

<script>
import toolbar from './components/toolbar/toolbar';

export default {
  name: 'App',
  components: {
    toolbar,
  },
  created() {
    this.$store.dispatch('setAllHikingSpots');
  },
};
</script>

<style>
/* text format  */
.whiteText {
  color: white;
}
/**
 * padding and margins
 */
.pb0 {
  padding-bottom: 0px !important;
}
.pb5 {
  padding-bottom: 5px !important;
}
.pbt0 {
  padding-bottom: 0px !important;
  padding-top: 0px !important;
}
.mbt0 {
  margin: 0px !important;
  margin-top: 0px !important;
}
.maxwidth100 {
  max-width: 100%;
}
/* style of the favicon at the toolba */
.bRadios8mr10 {
  border-radius: 8px;
  margin-right: 10px;
  width: 28px;
}

@keyframes slide-in {
  from {
    transform: translateY(-30px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes slide-out {
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(-30px);
    opacity: 0;
  }
}
</style>
