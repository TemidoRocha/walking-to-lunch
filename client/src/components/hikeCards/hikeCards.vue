<template>
  <v-container class="maxwidth100">
    <v-row dense>
      <v-col cols="12">
        <v-card no-gutters>
          <v-row no-gutters>
            <v-col cols="12" sm="2" md="2">
              <v-card-title>{{ $capitalizeFLetter($t('filter options')) }}</v-card-title>
            </v-col>
            <v-col cols="12" sm="12" md="4">
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
        :cols="$vuetify.breakpoint.name == 'xs' || isReadMore ? '12' : '6'"
      >
        <v-card color="#385F73" dark>
          <v-row no-gutters>
            <v-col class="" :cols="$vuetify.breakpoint.name == 'xs' || !isReadMore ? '12' : '6'">
              <v-card-title class="headline">
                {{ item.name }}
              </v-card-title>
              <v-card-subtitle class="pb0"> {{ item.code }}</v-card-subtitle>
            </v-col>
            <v-col v-if="isReadMore" :cols="$vuetify.breakpoint.name == 'xs' ? '12' : '6'">
              <v-list dense color="#385F73" dark>
                <v-list-item-group>
                  <v-list-item two-line>
                    <v-list-item-content>
                      <v-list-item-title class="listItemText">{{
                        `${$t('coordinates')}`
                      }}</v-list-item-title>
                      <v-list-item-subtitle class="wrapText"
                        >lat: {{ item.coordinates[0] }}, long:
                        {{ item.coordinates[1] }}</v-list-item-subtitle
                      >
                    </v-list-item-content>
                  </v-list-item>

                  <v-list-item>
                    <v-list-item-content>
                      <v-list-item-title class="listItemText"
                        >{{ `${$t('typology')}` }}: {{ `${$t(item.typology)}` }}</v-list-item-title
                      >
                    </v-list-item-content>
                  </v-list-item>

                  <v-list-item>
                    <v-list-item-content>
                      <v-list-item-title class="listItemText"
                        >{{ `${$t('distance')}` }}: {{ item.distance }}
                        {{ item.measure }}</v-list-item-title
                      >
                    </v-list-item-content>
                  </v-list-item>

                  <v-list-item>
                    <v-list-item-content>
                      <v-list-item-title class="listItemText"
                        >{{ `${$t('duration')}:` }} {{ item.duration }}</v-list-item-title
                      >
                    </v-list-item-content>
                  </v-list-item>

                  <v-list-item>
                    <v-list-item-content>
                      <v-list-item-title class="listItemText"
                        >{{ `${$t('dificulty')}:` }}
                        {{ `${$t(item.dificulty)}` }}</v-list-item-title
                      >
                    </v-list-item-content>
                  </v-list-item>
                </v-list-item-group>
              </v-list>
            </v-col>
            <v-col class="pbt0" cols="12">
              <v-row dense>
                <v-col class="pbt0" cols="6"
                  ><v-card-actions class="pbt0">
                    <v-btn text
                      ><p class="cardButtonText">{{ $t('download') }}</p></v-btn
                    >
                  </v-card-actions></v-col
                >
                <v-col class="pbt0" cols="6"
                  ><v-card-actions class="pbt0">
                    <v-btn text @click="toggleReadMore"
                      ><p class="cardButtonText">
                        {{ $t(!isReadMore ? 'read more' : 'show less') }}
                      </p></v-btn
                    >
                  </v-card-actions></v-col
                >
              </v-row>
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
  data: () => ({
    // toggleReadMore
    isReadMore: false,
  }),
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
    toggleReadMore() {
      this.isReadMore = !this.isReadMore;
    },
  },
};
</script>

<style scoped>
.v-card__title {
  padding: 8px 16px;
}
.cardButtonText {
  font-size: 0.8em;
}
.listItemText {
  font-size: 1rem !important;
  font-weight: 500 !important;
  line-height: 1rem !important;
}
.wrapText {
  word-wrap: break-word;
}
</style>
