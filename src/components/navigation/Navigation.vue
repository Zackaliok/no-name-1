<template>
  <div class="flex flex-row justify-end items-center">
    <!-- LandingPage -->
    <div class="m-4">
      <span
        class="text-slate-500 border rounded-lg border-slate-500 p-2 hover:border-slate-400 hover:text-slate-400 hover:bg-slate-800 duration-500"
      >
        <a href="#">{{ $t("navigation.home") }}</a>
      </span>
    </div>
    <!-- / LandingPage -->

    <!-- Personnal projects -->
    <div class="m-4">
      <span
        class="text-slate-500 border rounded-lg border-slate-500 p-2 hover:border-slate-400 hover:text-slate-400 hover:bg-slate-800 duration-500"
      >
        <a href="#">{{ $t("navigation.projects") }}</a>
      </span>
    </div>
    <!-- / Personnal projects -->

    <!-- Skills -->
    <div class="m-4">
      <span
        class="text-slate-500 border rounded-lg border-slate-500 p-2 hover:border-slate-400 hover:text-slate-400 hover:bg-slate-800 duration-500"
      >
        <a href="#">{{ $t("navigation.skills") }}</a>
      </span>
    </div>
    <!-- / Skills -->

    <!-- CV -->
    <div class="m-4">
      <span
        class="text-slate-500 border rounded-lg border-slate-500 p-2 hover:border-slate-400 hover:text-slate-400 hover:bg-slate-800 duration-500"
      >
        <a href="#">CV</a>
      </span>
    </div>
    <!-- / CV -->

    <!-- Contact -->
    <div class="m-4">
      <span
        class="text-slate-500 border rounded-lg border-slate-500 p-2 hover:border-slate-400 hover:text-slate-400 hover:bg-slate-800 duration-500"
      >
        <a href="#">Contact</a>
      </span>
    </div>
    <!-- / Contact -->

    <!-- Language switch -->
    <locale />
    <!-- / Language switch -->

    <!-- Github Repo -->
    <div class="flex flex-row m-4">
      <span
        class="text-slate-500 border rounded-lg border-slate-500 p-2 hover:border-slate-400 hover:text-slate-400 hover:bg-slate-800 duration-500"
      >
        <a href="#">
          <img
            src="../../assets/icons/github-24.svg"
            alt="Github Repo"
            class="fill-slate-50"
          />
        </a>
      </span>
    </div>
    <!-- / Github Repo -->
  </div>
</template>

<script>
import Locale from "./Locale.vue";
export default {
  components: { Locale },
  name: "Navigation-bar",
};
</script>
