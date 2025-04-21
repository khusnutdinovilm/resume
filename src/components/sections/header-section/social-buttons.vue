<template>
  <ul class="c-social-buttons">
    <li v-for="link in socialLinks" :key="link.id">
      <social-button :link-item="link" />
    </li>
  </ul>
</template>

<script setup lang="ts">
import { computed } from "vue";

import useMeStore from "store/me-store";

import SocialButton from "./social-button.vue";

defineOptions({
  name: "social-buttons",
});

const meStore = useMeStore();

const socialLinks = computed(() => meStore.meInfo?.links);
</script>

<style lang="scss">
.c-social-buttons {
  display: flex;
  gap: 6px;
}
</style>
