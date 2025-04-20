<template>
  <div class="theme-switcher" @click.prevent="toggleTheme">
    <span>{{ themeSwitcherIcon }}</span>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

import useTheme from "composable/use-theme";

defineOptions({
  name: "theme-switcher",
});

const { themePreference, toggleTheme } = useTheme();

const themesIcon = {
  auto: "🌓",
  dark: "🌙",
  light: "☀️",
};

const themeSwitcherIcon = computed(() => themesIcon[themePreference.value]);
</script>

<style lang="scss">
.theme-switcher {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: var(--bg-quaternary);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  padding: 10px;

  cursor: pointer;

  [data-theme="light"] & {
    box-shadow: 6px 7px 8px 5px rgba(40, 41, 41, 0.6);
  }

  & span {
    font-size: 1.5rem;

    @media screen and (min-width: 596px) {
      font-size: 2rem;
    }
  }
}
</style>
