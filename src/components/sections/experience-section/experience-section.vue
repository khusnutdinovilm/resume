<template>
  <app-section
    section-title="experience"
    section-desc="Yes. I've been around."
    class="experience-section"
  >
    <template #section-content>
      <timeline-list :timeline-items="expirienceList" />
    </template>
  </app-section>
</template>

<script setup lang="ts">
import { computed, onMounted } from "vue";

import AppSection from "shared/app-section";
import TimelineList from "shared/timeline-list";

import useExpirienceStore from "store/expirience-store";

defineOptions({
  name: "experience-section",
});

const expirienceStore = useExpirienceStore();
const expirienceList = computed(() => expirienceStore.expirienceList);

onMounted(async () => {
  try {
    await expirienceStore.getExpirienceList();
  } catch (error) {
    throw error;
  }
});
</script>

<style lang="scss">
.experience-section {
  & .o-section__content {
    padding-bottom: 0;
  }

  & .timeline {
    margin-left: calc(1rem - 2px);
  }
}
</style>
