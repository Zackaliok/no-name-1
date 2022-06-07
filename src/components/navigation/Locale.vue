<template>
  <img :src="this.flag" :alt="this.locale" @click="changeLocalization()" />
</template>

<script>
import { i18n } from "../../i18n";

export default {
  name: "locale-switch",
  data() {
    return {
      locale: i18n.global.locale,
      flag: "src/assets/flags/en.png",
    };
  },
  methods: {
    changeLocalization() {
      if (i18n.global.locale == "en") {
        i18n.global.locale = "fr";
      } else {
        i18n.global.locale = "en";
      }
      this.flag = "src/assets/flags/" + i18n.global.locale + ".png";
    },
  },
};
</script>

<style scoped>
img {
  width: 24px;
}
</style>
