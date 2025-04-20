<template>
  <div class="expertise-item">
    <div class="expertise-item__figure">
      <div class="expertise-item__number">
        {{ expertiseNumber }}
      </div>
    </div>

    <div class="expertise-item__body">
      <div class="expertise-item__title">
        {{ expertiseItem.title }}
      </div>

      <div class="expertise-item__description">
        {{ expertiseItem.description }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

defineOptions({
  name: "expertise-item",
});

const props = defineProps<{
  number: number;
  expertiseItem: ExpertiseType;
}>();

interface ExpertiseType {
  id: number;
  title: string;
  description: string;
}

const expertiseNumber = computed(() => (props.number < 10 ? `0${props.number}` : props.number));
</script>

<style lang="scss">
.expertise-item {
  display: flex;
  align-items: flex-start;

  &__figure {
    flex: 0 0 2.8rem;
  }

  &__number {
    @include mx.tp-heading-lg(var(--text-accent));
  }

  &__title {
    @include mx.tp-heading-lg();
  }
}
</style>
