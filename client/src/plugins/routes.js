// These can be imported from other files
import InsertHike from '../views/insertHike.vue';
import Leaflet from '../views/leaflet.vue';

// 2. Define some routes
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// `Vue.extend()`, or just a component options object.
// We'll talk about nested routes later.
export const routes = [
  { path: '/', component: Leaflet },
  { path: '/insert-hike', component: InsertHike },
];
