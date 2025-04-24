<template>
  <app-section
    section-title="portfolio"
    section-desc="Here it gets interesting."
    class="portfolio-section"
  >
    <template #section-content>
      <portfolio-list />
    </template>
  </app-section>
</template>

<script setup lang="ts">
import { onMounted } from "vue";

import AppSection from "shared/app-section";

import usePortfolioStore from "store/portfolio-store";

import PortfolioList from "./portfolio-list.vue";

defineOptions({
  name: "portfolio-section",
});

const portfolioStore = usePortfolioStore();

onMounted(async () => {
  try {
    await portfolioStore.getPortfolioList();
  } catch (error) {
    throw error;
  }
});
</script>

<style lang="scss"></style>
