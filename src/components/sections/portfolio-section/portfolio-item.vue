<template>
  <div class="portfolio-item">
    <a :href="portfolioItem.siteUrl" class="portfolio-item__image-block" target="_blank">
      <img :src="portfolioItem.imgUrl" :alt="portfolioItem.name" />
    </a>

    <div class="portfolio-item__content">
      <h3 class="portfolio-item__name">
        {{ portfolioItem.name }}
      </h3>

      <hr class="portfolio-item__deco-line" />

      <div class="portfolio-item__description">
        {{ portfolioItem.desc }}
      </div>

      <div class="portfolio-item__urls">
        <link-button :href="portfolioItem.repoUrl">
          <github-icon />
        </link-button>

        <link-button :href="portfolioItem.siteUrl">
          <web-icon />
        </link-button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { IPortfolioItem } from "types";

import GithubIcon from "icons/github-icon.vue";
import WebIcon from "icons/web-icon.vue";

import LinkButton from "ui/link-button";

defineOptions({
  name: "portfolio-item",
});

defineProps<{
  portfolioItem: IPortfolioItem;
}>();
</script>

<style lang="scss">
.portfolio-item {
  display: flex;
  flex-direction: column;

  &__image-block {
    overflow: hidden;

    & img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: fill;
      cursor: pointer;
      transition:
        opacity 0.8s ease,
        transform 0.8s ease;
    }

    &:hover img {
      opacity: 0.4;
      transform: scale(1.012);
    }
  }

  &__image {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: fill;
    cursor: pointer;
    transition:
      opacity 0.8s ease,
      transform 0.8s ease;
  }

  &__content {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 0.825rem;

    padding: 1.75rem 1.75rem;
  }

  &__name {
    @include mx.tp-heading-lg(#e4e5e5);
  }

  &__deco-line {
    height: 3px;
    width: 25%;
    color: #c0c1c1;
    background: #c0c1c1;
  }

  &__description {
    flex: 1;
    color: #e4e5e5;
  }

  &__urls {
    display: flex;
    gap: 10px;
    justify-content: flex-end;
  }
}
</style>
