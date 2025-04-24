<template>
  <link-button :href="linkItem.href" :html-content="svg" class="social-button" />
</template>

<script setup lang="ts">
import type { ILinkItem } from "types";
import { onMounted, ref } from "vue";

import LinkButton from "ui/link-button";

defineOptions({
  name: "social-button",
});

const props = defineProps<{
  linkItem: ILinkItem;
}>();

const svg = ref("");

onMounted(async () => {
  try {
    const res = await fetch(props.linkItem.svgLink, { method: "get" });
    svg.value = await res.text();
  } catch (error) {
    throw error;
  }
});
</script>
