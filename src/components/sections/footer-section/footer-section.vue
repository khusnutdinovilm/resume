<template>
  <app-section section-title="Contact" section-desc="Call me, maybe." class="footer-section">
    <template #section-content>
      <div class="footer-section__contact-items">
        <contact-items />

        <hr />
      </div>

      <div class="footer-section__brand">
        <brand-item />

        <social-buttons />
      </div>
    </template>
  </app-section>
</template>

<script setup lang="ts">
import AppSection from "shared/app-section";

import BrandItem from "section/header-section/brand-item.vue";
import ContactItems from "section/header-section/contact-items.vue";
import SocialButtons from "section/header-section/social-buttons.vue";

defineOptions({
  name: "footer-section",
});
</script>

<style lang="scss">
.footer-section {
  & .o-section__content {
    display: flex;
    flex-direction: column;
    gap: 3.5rem;

    @include mx.rs-start-at(sm) {
      gap: 6.3rem;
    }

    @include mx.rs-start-at(md) {
      padding-bottom: 1.4rem;
    }

    @include mx.rs-start-at(xl) {
      gap: 8.75rem;
      padding-bottom: 1.6625rem;
    }
  }

  &__contact-items {
    display: flex;
    flex-direction: column;
    gap: 1.75rem;

    @include mx.rs-start-at(xl) {
      gap: 2.7125rem;
    }
  }

  & .contact-items {
    justify-content: flex-start;

    &__item {
      align-items: flex-start;
    }
  }

  &__brand {
    display: flex;
    flex-direction: column;
    gap: 1.75rem;

    padding-bottom: 1.75rem;

    @include mx.rs-start-at(sm) {
      flex-direction: row;
      align-items: flex-end;
      justify-content: space-between;
      gap: 0;
    }

    @include mx.rs-start-at(xl) {
      padding-bottom: 2.7125rem;
    }

    & .brand {
      align-items: flex-start;
    }

    & .brand__title .brand__re-sizer {
      align-items: flex-start;
    }
  }

  & hr {
    height: 2px;
    background-color: var(--border-color);
  }
}
</style>
