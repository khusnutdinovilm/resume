<template>
  <div class="timeline">
    <div v-if="withEnd" class="timeline__end"></div>

    <timeline-item
      v-for="timelineItem in timelineItems"
      :key="timelineItem.id"
      :timeline-item="timelineItem"
    />
  </div>
</template>

<script setup lang="ts">
import type { ITimelineItem } from "types";

import TimelineItem from "./timeline-item.vue";

defineOptions({
  name: "timeline-list",
});

defineProps<{
  timelineItems: ITimelineItem[];
  withEnd?: boolean;
}>();
</script>

<style lang="scss">
.timeline {
  border-left: 2px solid var(--border-color);
  padding-left: 25px;
  position: relative;

  &__end {
    height: 1px;
    width: 16px;
    position: absolute;
    left: -9px;
    bottom: 0;
    border: 1px solid var(--border-color);
  }
}
</style>
