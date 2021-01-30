<template>
  <v-dialog
    v-model="pdfDialog"
    fullscreen
    hide-overlay
    transition="dialog-bottom-transition"
    scrollable
  >
    <v-card tile>
      <v-toolbar dense flat dark color="#385F73">
        <v-btn icon dark @click="$emit('closeDialog')">
          <v-icon>mdi-close</v-icon>
        </v-btn>
        <v-toolbar-title>{{ selectedHike.code }} | {{ selectedHike.name }}</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-menu bottom right offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn dark icon v-bind="attrs" v-on="on">
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item
              :key="Math.round(Math.random() * 9999999)"
              @click="$refs.hikePdfComponent.print()"
            >
              <v-list-item-title>{{ $t('print') }}</v-list-item-title>
            </v-list-item>
            <v-list-item
              :key="Math.round(Math.random() * 9999999)"
              @click="downloadHike(this.selectedHike.url)"
            >
              <v-list-item-title>{{ $t('download') }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-toolbar>
      <pdf ref="hikePdfComponent" :key="pdfKey" :src="pdfSrc"></pdf>
      <div style="flex: 1 1 auto; background-color: #385F73"></div>
    </v-card>
  </v-dialog>
</template>

<script>
import pdf from 'vue-pdf';
export default {
  name: 'pdfView',
  props: {
    pdfSrc: String,
    pdfDialog: Boolean,
    selectedHike: Object,
  },
  components: {
    pdf,
  },
  created() {
    this.pdfKey = 785786587;
  },
};
</script>

<style></style>
