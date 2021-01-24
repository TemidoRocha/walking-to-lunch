<template>
  <div>
    <v-form>
      <v-container>
        <v-row v-if="!getUserId">
          <v-col v-if="isSignup && signupFalse" cols="12" sm="6" md="3">
            <v-text-field :label="$t('name')" solo v-model="name"></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="6">
            <v-text-field
              label="email"
              placeholder="xxx@xxx.xx"
              solo
              v-model="email"
            ></v-text-field>
          </v-col>

          <v-col cols="12" sm="6" md="3">
            <v-text-field :label="$t('password')" solo v-model="password"></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="6">
            <v-btn v-if="!getUserId" small color="primary" dark @click="submit">
              submit
            </v-btn>
          </v-col>
          <v-col cols="6">
            <v-btn
              v-if="!isSignup && !getUserId"
              small
              color="primary"
              dark
              @click="isSignup = true"
            >
              signup
            </v-btn>
            <v-btn
              v-if="isSignup && !getUserId"
              small
              color="primary"
              dark
              @click="isSignup = false"
            >
              login
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-form>

    <div v-if="getUserId">
      <v-form>
        <v-container>
          <v-row align="center">
            <v-col cols="12">
              <v-btn small color="primary" dark @click="logout">
                logout
              </v-btn>
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="6">
              <v-text-field :label="$t('latitude')" solo v-model="form.latitude"></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-text-field :label="$t('longitude')" solo v-model="form.longitude"></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="6">
              <v-text-field
                :label="$t('name')"
                solo
                v-model="form.name"
                placeholder="Trilho do Linho"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="6">
              <v-text-field
                :label="$t('code')"
                solo
                v-model="form.code"
                placeholder="ALB - PR1"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="6">
              <v-container class="px-0" fluid>
                <v-radio-group v-model="form.typology">
                  <v-radio key="round" :label="$t('round')" value="round"></v-radio>
                  <v-radio key="linear" :label="$t('linear')" value="linear"></v-radio>
                </v-radio-group>
              </v-container>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="6">
              <v-text-field
                :label="$t('distance')"
                solo
                v-model.number="form.distance"
                placeholder="45.6"
              ></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-text-field
                :label="$t('measure')"
                solo
                v-model="form.measure"
                disabled
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="6">
              <v-text-field
                :label="$t('duration')"
                solo
                v-model.number="form.duration0"
                placeholder="01:00"
              ></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-text-field
                :label="$t('duration')"
                solo
                v-model.number="form.duration1"
                placeholder="01:30"
                :disabled="!form.duration0"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="6">
              <v-container class="px-0" fluid>
                <v-radio-group v-model="form.dificulty">
                  <v-radio key="low" :label="$t('low')" value="low"></v-radio>
                  <v-radio key="medium" :label="$t('medium')" value="medium"></v-radio>
                  <v-radio key="high" :label="$t('high')" value="high"></v-radio>
                </v-radio-group>
              </v-container>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12">
              <v-textarea
                :label="$t('search words')"
                solo
                v-model="form.searchWords"
                placeholder="Vilarinho São Roque, ALBERGARIA A VELHA"
              ></v-textarea>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12">
              <v-text-field
                :label="$t('url')"
                solo
                v-model="form.url"
                placeholder="ALB_pr2_trilho_dos_tres_rios_folheto.pdf"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-col cols="6">
            <v-btn small color="primary" dark @click="inertHike">
              insert track
            </v-btn>
          </v-col>
        </v-container>
      </v-form>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: 'InsertHike',
  data: () => ({
    name: '',
    password: '',
    email: '',
    isSignup: false,
    // form variables
    form: {
      latitude: null, // numbers
      longitude: null, // numbers
      name: '',
      code: '',
      typology: [''],
      distance: '',
      measure: 'km',
      duration: null, // numbers
      dificulty: [''],
      searchWords: '',
      url: '',
      duration0: '',
      duration1: '',
    },
    // signup false
    signupFalse: false,
  }),
  computed: {
    ...mapGetters(['getUserId', 'getUserName', 'getUserEmail']),
  },
  methods: {
    // log methods
    submit() {
      if (this.isSignup)
        this.$store.dispatch('signUp', {
          name: this.name,
          password: this.password,
          email: this.email,
        });
      else
        this.$store.dispatch('login', {
          password: this.password,
          email: this.email,
        });
      this.name = null;
      this.password = null;
      this.email = null;
    },
    logout() {
      this.$store.commit('logout');
    },
    // hike form methods
    async inertHike() {
      try {
        const createRes = await this.axios.post('api/hikings', {
          name: this.form.name,
          coordinates: [this.form.latitude, this.form.longitude],
          code: this.form.code,
          typology: this.form.typology,
          distance: this.form.distance,
          measure: this.form.measure,
          duration: this.form.duration1
            ? [this.form.duration0, this.form.duration1]
            : [this.form.duration0],
          dificulty: this.form.dificulty,
          searchWords: this.form.searchWords.split(',').map((x) => x.trim()),
        });
        console.dir(createRes);
      } catch (error) {
        console.dir(error);
      }
    },
  },
};
</script>

<style></style>
