<template>
  <app-section class="header-section">
    <template #section-header>
      <div class="header-section__inner header-section__inner--header">
        <avatar-item :avatar-url="avatarUrl" class="header-section__avatar" />
      </div>
    </template>

    <template #section-content>
      <div class="header-section__inner header-section__inner--content">
        <div class="header-section__brand">
          <brand-item />

          <social-buttons />
        </div>

        <div class="header-section__contact-items">
          <hr />

          <contact-items />
        </div>
      </div>
    </template>
  </app-section>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from "vue";

import AppSection from "shared/app-section/app-section.vue";

import useMeStore from "store/me-store";

import AvatarItem from "./avatar-item.vue";
import BrandItem from "./brand-item.vue";
import ContactItems from "./contact-items.vue";
import SocialButtons from "./social-buttons.vue";

defineOptions({
  name: "header-section",
});

const meStore = useMeStore();

const isLoading = ref(false);

const avatarUrl = computed(() => meStore.meInfo?.avatarUrl || "");

onMounted(async () => {
  isLoading.value = true;

  try {
    await meStore.getMeInfo();
  } catch (error) {
    console.error(error);
  } finally {
    isLoading.value = false;
  }
});
</script>

<style lang="scss">
.header-section {
  & .t-section__header {
    @include mx.rs-active-by(lg) {
      background-color: var(--bg-primary);
      border: none;
    }
  }

  & .o-section__header {
    @include mx.rs-start-at(lg) {
      height: 100dvh;
    }
  }

  &__inner {
    height: 100%;
    display: flex;
    flex-direction: column;

    &--header {
      align-items: center;

      @include mx.rs-start-at(lg) {
        justify-content: center;
      }
    }

    &--content {
      align-items: stretch;
      position: relative;
      gap: 1.75rem;

      @include mx.rs-start-at(lg) {
        justify-content: center;
      }
    }
  }

  &__avatar,
  &__brand {
    @include mx.rs-start-at(lg) {
      margin-top: -5.8rem;
      position: relative;
      top: -2vh;
    }
  }

  &__brand {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.7rem;

    @include mx.rs-start-at(lg) {
      flex-direction: row;
      align-items: flex-end;
      justify-content: space-between;
      gap: 0;
    }
  }

  &__contact-items {
    padding-bottom: 1.75rem;

    @include mx.rs-start-at(lg) {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
    }
  }

  & hr {
    height: 2px;
    background-color: var(--border-color);
    margin-bottom: 1.75rem;
  }
}
</style>
