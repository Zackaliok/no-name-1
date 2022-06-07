<template>
  <img
    :src="this.flag"
    :alt="this.locale"
    @click="changeLocalization()"
    class="text-slate-500 border rounded-lg border-slate-500 p-2 hover:border-slate-400 hover:text-slate-400 hover:bg-slate-800 duration-500"
  />
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
  width: 2.6rem;
}
</style>
