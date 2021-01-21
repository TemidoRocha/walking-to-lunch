<template>
  <div class="locale-changer">
    <select v-model="$i18n.locale" value="en" @click="changeMetaTag">
      <option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang">{{ lang }}</option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'locale-changer',
  data() {
    return { langs: ['en', 'fr', 'pt'] };
  },
  methods: {
    changeMetaTag() {
      const html = document.documentElement; // returns the html tag
      html.setAttribute('lang', this.$i18n.locale);
      html.setAttribute('xml:lang', this.$i18n.locale);
    },
  },
};
</script>
<style>
.locale-changer {
  border: 1px solid black;
  border-radius: 5px;
}</style
>>
