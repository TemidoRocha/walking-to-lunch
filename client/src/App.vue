<template>
  <div>
    <toolbar />
    <router-view></router-view>
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
.maxwidth100 {
  max-width: 100%;
}
/* style of the favicon at the toolba */
.bRadios8mr10 {
  border-radius: 8px;
  margin-right: 10px;
  width: 28px;
}
.slide-enter-active {
  animation: slide-in 200ms ease-out forwards;
}

.slide-leave-active {
  animation: slide-out 200ms ease-out forwards;
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
