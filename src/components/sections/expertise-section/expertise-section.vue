<template>
  <app-section
    section-title="Expertise"
    section-desc="Batman would be jealous."
    class="expertise-section"
  >
    <template #section-content>
      <div class="o-list">
        <div
          v-for="(expertise, idx) in expertiseStore.expertiseList"
          :key="expertise.id"
          class="o-list__item"
        >
          <expertise-item :number="idx + 1" :expertise-item="expertise" class="o-content" />
        </div>
      </div>
    </template>
  </app-section>
</template>

<script setup lang="ts">
import { onMounted } from "vue";

import AppSection from "shared/app-section/app-section.vue";

import useExpertiseStore from "store/expertise-store";

import ExpertiseItem from "./expertise-item.vue";

defineOptions({
  name: "expertise-section",
});

const expertiseStore = useExpertiseStore();

onMounted(async () => {
  try {
    await expertiseStore.getExpertiseList();
  } catch (error) {
    console.error(error);
  }
});
</script>
