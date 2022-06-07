<template>
  <div class="flex flex-row justify-end items-center">
    <!-- LandingPage -->
    <div class="m-4">
      <a
        href="/"
        class="text-slate-500 border rounded-lg border-slate-500 p-2 hover:border-slate-400 hover:text-slate-400 hover:bg-slate-800 duration-500"
      >
        {{ $t("navigation.home") }}
      </a>
    </div>
    <!-- / LandingPage -->

    <!-- Personnal projects -->
    <div class="m-4">
      <a
        href="/projects"
        class="text-slate-500 border rounded-lg border-slate-500 p-2 hover:border-slate-400 hover:text-slate-400 hover:bg-slate-800 duration-500"
      >
        {{ $t("navigation.projects") }}
      </a>
    </div>
    <!-- / Personnal projects -->

    <!-- Skills -->
    <div class="m-4">
      <a
        href="/skills"
        class="text-slate-500 border rounded-lg border-slate-500 p-2 hover:border-slate-400 hover:text-slate-400 hover:bg-slate-800 duration-500"
      >
        {{ $t("navigation.skills") }}
      </a>
    </div>
    <!-- / Skills -->

    <!-- CV -->
    <div class="m-4">
      <a
        href="/cv"
        class="text-slate-500 border rounded-lg border-slate-500 p-2 hover:border-slate-400 hover:text-slate-400 hover:bg-slate-800 duration-500"
      >
        CV
      </a>
    </div>
    <!-- / CV -->

    <!-- Contact -->
    <div class="m-4">
      <span
        class="text-slate-500 border rounded-lg border-slate-500 p-2 hover:border-slate-400 hover:text-slate-400 hover:bg-slate-800 duration-500"
      >
        <a href="/contact">Contact</a>
      </span>
    </div>
    <!-- / Contact -->

    <!-- Language switch -->
    <div class="flex flex-row m-4">
      <locale />
    </div>
    <!-- / Language switch -->

    <!-- Github Repo -->
    <div class="flex flex-row m-4">
      <a
        href="https://github.com/Zackaliok/no-name-1"
        class="text-slate-500 border rounded-lg border-slate-500 p-2 hover:border-slate-400 hover:text-slate-400 hover:bg-slate-800 duration-500"
      >
        <img
          src="../../assets/icons/github-24.svg"
          alt="Github Repo"
          class="fill-slate-50"
        />
      </a>
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
