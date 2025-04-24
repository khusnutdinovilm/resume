<template>
  <div class="portfolio-list o-list">
    <div
      v-for="portfolioItem in portfolioList"
      :key="portfolioItem.id"
      class="o-list__item o-content"
    >
      <portfolio-list-item :portfolio-item="portfolioItem" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

import usePortfolioStore from "store/portfolio-store";

import PortfolioListItem from "./portfolio-item.vue";

defineOptions({
  name: "portfolio-list",
});

const portfolioStore = usePortfolioStore();

const portfolioList = computed(() => portfolioStore.portfolioList);
</script>

<style lang="scss">
.portfolio-list {
  & .portfolio-item {
    height: 100%;
  }
}
</style>
