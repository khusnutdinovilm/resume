<template>
  <header-section />

  <intro-section />
  <expertise-section />
  <skills-section />

  <footer-section />

  <div class="theme-switcher-block">
    <theme-switcher />
  </div>
</template>

<script setup lang="ts">
import ThemeSwitcher from "ui/theme-switcher";

import ExpertiseSection from "section/expertise-section";
import FooterSection from "section/footer-section";
import HeaderSection from "section/header-section";
import IntroSection from "section/intro-section";
import SkillsSection from "section/skills-section";
</script>

<style lang="scss">
.theme-switcher-block {
  position: fixed;
  z-index: 10;
  bottom: 12px;
  right: 12px;
}
</style>
