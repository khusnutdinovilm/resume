<template>
  <div class="contact-items">
    <div v-if="contactItems.location" class="contact-items__item">
      <h4>Location</h4>

      <p>{{ contactItems.location }}</p>
    </div>

    <div v-if="contactItems.phone" class="contact-items__item">
      <h4>Phone</h4>

      <p>{{ contactItems.phone }}</p>
    </div>

    <div v-if="contactItems.web" class="contact-items__item">
      <h4>Web</h4>

      <p>{{ contactItems.web }}</p>
    </div>

    <div v-if="contactItems.email" class="contact-items__item">
      <h4>Email</h4>

      <p>{{ contactItems.email }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

import useMeStore from "store/me-store";

defineOptions({
  name: "contact-items",
});

const meStore = useMeStore();

const contactItems = computed(() => ({
  location: meStore.meInfo?.location || "",
  phone: meStore.meInfo?.phone || "",
  web: meStore.meInfo?.web || "",
  email: meStore.meInfo?.email || "",
}));
</script>

<style lang="scss">
.contact-items {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  gap: 1.75rem;

  @include mx.rs-start-at(md) {
    justify-content: flex-start;
  }

  &__item {
    flex-basis: calc(100% - 1.75rem);
    display: flex;
    flex-direction: column;
    align-items: center;

    @include mx.rs-start-at(sm) {
      flex: 1 auto;
    }

    @include mx.rs-start-at(md) {
      align-items: flex-start;
    }

    & h4 {
      font-weight: 600;
    }
  }
}
</style>
