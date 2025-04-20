<template>
  <intro-section />
  <expertise-section />

  <div class="theme-switcher-block">
    <theme-switcher />
  </div>
</template>

<script setup lang="ts">
import ThemeSwitcher from "ui/theme-switcher";

import ExpertiseSection from "section/expertise-section";
import IntroSection from "section/intro-section";
</script>

<style lang="scss">
.theme-switcher-block {
  position: fixed;
  z-index: 10;
  bottom: 12px;
  right: 12px;
}
</style>
