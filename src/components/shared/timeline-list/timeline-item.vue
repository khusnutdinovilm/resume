<template>
  <div class="timeline-item">
    <div class="timeline-item__point"></div>

    <div class="o-content">
      <div class="o-list">
        <div class="o-list__item">
          <div class="timeline-item__timeframe">
            {{ timeframe }}
          </div>
          <div class="timeline-item__heading">
            {{ timelineItem.name }}
          </div>
          <div class="timeline-item__title">
            {{ timelineItem.specialization }}
          </div>
          <div class="timeline-item__location">
            {{ timelineItem.location }}
          </div>
        </div>

        <div class="o-list__item">
          {{ timelineItem.description }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ITimelineItem } from "types";
import { computed } from "vue";

defineOptions({
  name: "timeline-item",
});

const props = defineProps<{
  timelineItem: ITimelineItem;
}>();

const timeframe = computed(
  () => `${props.timelineItem.timeframe.start}-${props.timelineItem.timeframe.end}`,
);
</script>

<style lang="scss">
.timeline-item {
  position: relative;

  &__point {
    width: 10px;
    height: 10px;
    position: absolute;
    border-radius: 50%;
    left: -31px;
    top: 3px;
    background-color: var(--text-accent);
    box-shadow: 0 0 0 6px var(--bg-primary);
  }

  &__timeframe {
    opacity: 0.6;
    color: var(--text-primary);
    font-size: 0.7rem;
    font-weight: 500;
    margin-bottom: 0.4rem;
  }

  &__heading {
    font-size: 1.2rem;
    line-height: 1.45;
    text-transform: uppercase;
    color: var(--text-primary);
    margin-bottom: 0.4rem;
  }

  &__title {
    font-size: 0.8rem;
    line-height: 1.75;
    font-weight: 500;
    color: var(--text-primary);
    margin-bottom: 0.4rem;
  }

  &__location {
    opacity: 0.6;
    font-size: 0.7rem;
    font-weight: 500;
    line-height: 1.75;
    color: var(--text-primary);
    margin-bottom: 0.4rem;
  }
}
</style>
