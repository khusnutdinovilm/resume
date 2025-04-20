<template>
  <media-block
    :media-title="expertiseItem.title"
    :media-body="expertiseItem.description"
    class="expertise-item"
  >
    <template #media-number>
      {{ expertiseNumber }}
    </template>
  </media-block>
</template>

<script setup lang="ts">
import { computed } from "vue";

import MediaBlock from "shared/media-block";

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
