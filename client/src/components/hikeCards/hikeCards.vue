<template>
  <v-container>
    <v-row dense>
      <v-col v-for="item in getHikingsSpots" :key="item.id" cols="12">
        <v-card color="#385F73" dark>
          <v-card-title class="headline">
            {{ `${$t(item.name)}` }}
          </v-card-title>
          <v-card-subtitle> {{ `${$t(item.code)}` }}</v-card-subtitle>

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
                    >{{ `${$t('distance')}` }}: {{ `${$t(item.distance)}` }}
                    {{ item.measure }}</v-list-item-title
                  >
                </v-list-item-content>
              </v-list-item>

              <v-list-item two-line>
                <v-list-item-content>
                  <v-list-item-title
                    >{{ `${$t('duration')}:` }} {{ `${$t(item.duration)}` }}</v-list-item-title
                  >
                  <v-list-item-subtitle
                    >{{ `${$t('dificulty')}:` }} {{ `${$t(item.dificulty)}` }}</v-list-item-subtitle
                  >
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
          <v-card-actions>
            <v-btn text>
              {{ `${$t('download')}` }}
            </v-btn>
          </v-card-actions>
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
    ...mapGetters(['getHikingsSpots']),
  },
};
</script>

<style></style>
