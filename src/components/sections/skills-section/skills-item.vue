<template>
  <div class="skill-item">
    <media-block :media-title="skillItem.name" class="skill-item__o-media">
      <template #media-number> {{ skillItem.value }}<small>%</small> </template>
    </media-block>

    <div class="progress-bar">
      <div class="progress-bar__progress" :style="{ width: `${skillItem.value}%` }"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import MediaBlock from "shared/media-block";

defineOptions({
  name: "skill-item",
});

defineProps<{
  skillItem: SkillType;
}>();

interface SkillType {
  id: number;
  name: string;
  value: number;
}
</script>

<style lang="scss">
.skill-item {
  display: flex;
  flex-direction: column;
  gap: 0.55rem;

  &__o-media small {
    @include mx.tp-heading-sub();
  }
}

.progress-bar {
  height: 5px;
  background-color: var(--border-color);

  &__progress {
    height: 100%;
    background-color: var(--text-accent);
  }
}
</style>
