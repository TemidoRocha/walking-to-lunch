<template>
  <v-container class="maxwidth100">
    <v-row dense>
      <v-col cols="12">
        <v-card no-gutters>
          <v-row no-gutters>
            <v-col cols="2" sm="4" md="2">
              <v-card-title>{{ $t('filter options') }}</v-card-title>
            </v-col>
            <v-col cols="4" sm="4" md="4">
              <v-checkbox
                v-model="showAll"
                :label="$t('show all tracks')"
                color="red"
                hide-details
                @click="showAllMethod"
              ></v-checkbox>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
    <v-row dense>
      <v-col
        v-for="item in getHikingsCards"
        :key="item.id"
        :cols="$vuetify.breakpoint.name == 'xs' ? '12' : '6'"
      >
        <v-card color="#385F73" dark>
          <v-row no-gutters>
            <v-col :cols="$vuetify.breakpoint.name == 'xs' ? '12' : '6'">
              <v-card-title class="headline">
                {{ item.name }}
              </v-card-title>
              <v-card-subtitle> {{ item.code }}</v-card-subtitle>
            </v-col>
            <v-col :cols="$vuetify.breakpoint.name == 'xs' ? '12' : '6'">
              <v-list dense color="#385F73" dark>
                <v-list-item-group>
                  <v-list-item two-line>
                    <v-list-item-content>
                      <v-list-item-title>{{ `${$t('coordinates')}` }}</v-list-item-title>
                      <v-list-item-subtitle
                        >lat: {{ item.coordinates[0] }}, long:
                        {{ item.coordinates[1] }}</v-list-item-subtitle
                      >
                    </v-list-item-content>
                  </v-list-item>

                  <v-list-item>
                    <v-list-item-content>
                      <v-list-item-title
                        >{{ `${$t('typology')}` }}: {{ `${$t(item.typology)}` }}</v-list-item-title
                      >
                    </v-list-item-content>
                  </v-list-item>

                  <v-list-item>
                    <v-list-item-content>
                      <v-list-item-title
                        >{{ `${$t('distance')}` }}: {{ item.distance }}
                        {{ item.measure }}</v-list-item-title
                      >
                    </v-list-item-content>
                  </v-list-item>

                  <v-list-item two-line>
                    <v-list-item-content>
                      <v-list-item-title
                        >{{ `${$t('duration')}:` }} {{ item.duration }}</v-list-item-title
                      >
                      <v-list-item-subtitle
                        >{{ `${$t('dificulty')}:` }}
                        {{ `${$t(item.dificulty)}` }}</v-list-item-subtitle
                      >
                    </v-list-item-content>
                  </v-list-item>
                </v-list-item-group>
              </v-list>
            </v-col>
            <v-col cols="12">
              <v-card-actions>
                <v-btn text>download</v-btn>
              </v-card-actions>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data: () => ({}),
  computed: {
    ...mapGetters(['getHikingsCards']),
    // filter options
    showAll: {
      get() {
        return this.$store.state.showAll;
      },
      set(value) {
        this.$store.commit('updateShowAll', value);
      },
    },
  },
  methods: {
    showAllMethod() {
      this.$store.commit('setHikingCardsIsShowAll', this.showAll);
    },
  },
};
</script>

<style scoped>
.v-card__title {
  padding: 8px 16px;
}
</style>
