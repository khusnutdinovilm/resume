<template>
  <div class="brand">
    <h1 class="brand__title">
      <span class="brand__re-sizer">
        <span class="brand__first-word">
          {{ name }}
        </span>

        <span class="brand__second-word">
          {{ surname }}
        </span>
      </span>
    </h1>

    <h2 class="brand__subtitle">
      <span class="brand__re-sizer">
        {{ specilization }}
      </span>
    </h2>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

import useMeStore from "store/me-store";

defineOptions({
  name: "brand-item",
});

const meStore = useMeStore();

const name = computed(() => meStore.meInfo?.name || "");
const surname = computed(() => meStore.meInfo?.surname || "");
const specilization = computed(() => meStore.meInfo?.specilization || "");
</script>

<style lang="scss">
.brand {
  display: flex;
  flex-direction: column;
  align-items: center;

  @include mx.rs-start-at(lg) {
    gap: 0.8rem;
    align-items: flex-start;
  }

  @include mx.rs-start-at(xl) {
    gap: 1.4rem;
  }

  &__re-sizer {
    font-size: 65%;

    @include mx.rs-start-at(xl) {
      font-size: 100%;
    }
  }

  &__title {
    font-size: 4.8rem;
    line-height: 0.91;

    & .brand__re-sizer {
      display: flex;
      flex-direction: column;
      align-items: center;

      @include mx.rs-start-at(lg) {
        align-items: flex-start;
      }
    }
  }

  &__first-word {
    font-weight: 300;
    text-transform: lowercase;

    color: var(--text-heading);
  }

  &__second-word {
    font-weight: 700;
    text-transform: uppercase;

    color: var(--text-accent);
  }

  &__subtitle {
    font-size: 1.5rem;
    font-weight: 300;
    line-height: 1.75;
    color: var(--text-primary);
  }
}
</style>
