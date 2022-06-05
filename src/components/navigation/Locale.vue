<template>
  <p>France</p>
</template>

<script>
export default {
  name: "locale-switch",
  setup() {
    [
      {
        locale: "en",
        img: "@/assets/images/flags/en.png",
        name: "English",
      },
      {
        locale: "fr",
        img: "@/assets/images/flags/fr.png",
        name: "French",
      },
    ];
  },
};
</script>
