<template>
  <app-section section-title="Skills" section-desc="Progress bars, anyone?" class="skills-section">
    <template #section-content>
      <div class="o-list">
        <div v-for="skill in skillsStore.skillsList" :key="skill.id" class="o-list__item o-content">
          <skills-item :skill-item="skill" />
        </div>
      </div>
    </template>
  </app-section>
</template>

<script setup lang="ts">
import { onMounted } from "vue";

import AppSection from "shared/app-section/app-section.vue";

import useSkillsStore from "store/skills-store";

import SkillsItem from "./skills-item.vue";

defineOptions({
  name: "skills-section",
});

const skillsStore = useSkillsStore();

onMounted(async () => {
  try {
    await skillsStore.getSkillsList();
  } catch (error) {
    console.error(error);
  }
});
</script>
