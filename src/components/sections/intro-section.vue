<template>
  <app-section section-title="Intro" section-desc="What I am all about." class="intro-section">
    <template #section-content>
      <p v-for="(text, idx) in introStore.aboutMe" :key="idx">
        {{ text }}
      </p>
    </template>
  </app-section>
</template>

<script setup lang="ts">
import { onMounted } from "vue";

import AppSection from "shared/app-section";

import useIntroStore from "store/intro-store";

defineOptions({
  name: "intro-section",
});

const introStore = useIntroStore();

onMounted(async () => {
  try {
    await introStore.getInfoAboutMe();
  } catch (error) {
    console.error(error);
  }
});
</script>

<style lang="scss">
.intro-section {
  & .o-section__content p {
    @include mx.tp-body-md();
  }
}
</style>
