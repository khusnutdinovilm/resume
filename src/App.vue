<template>
  <main></main>

  <div class="theme-switcher-block">
    <theme-switcher />
  </div>
</template>

<script setup lang="ts">
import ThemeSwitcher from "ui/theme-switcher";
</script>

<style lang="scss">
.theme-switcher-block {
  position: fixed;
  bottom: 12px;
  right: 12px;
}
</style>
