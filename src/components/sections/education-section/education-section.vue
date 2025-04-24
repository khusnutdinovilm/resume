<template>
  <app-section
    section-title="education"
    section-desc="Lazy isn't in my vocabulary."
    class="education-section"
  >
    <template #section-content>
      <div class="o-content">
        <timeline-list :timeline-items="educationList" with-end />
      </div>
    </template>
  </app-section>
</template>

<script setup lang="ts">
import { computed, onMounted } from "vue";

import AppSection from "shared/app-section";
import TimelineList from "shared/timeline-list";

import useEducationStore from "store/education-store";

defineOptions({
  name: "education-section",
});

const educationStore = useEducationStore();

const educationList = computed(() => educationStore.educationList);

onMounted(async () => {
  try {
    await educationStore.getEducationList();
  } catch (error) {
    throw error;
  }
});
</script>

<style lang="scss">
.education-section {
  & .o-section__content {
    padding-top: 0;
    padding-bottom: 0;
  }

  & .timeline {
    padding-top: 1.75rem;
    margin-left: calc(1rem - 2px);

    @include mx.rs-start-at(md) {
      padding-top: 3.15rem;
    }

    @include mx.rs-start-at(xl) {
      padding-top: 4.375rem;
    }
  }
}
</style>
