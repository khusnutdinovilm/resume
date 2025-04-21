<template>
  <a :href="linkItem.href" class="c-social-button" target="_blank" v-html="svg"> </a>
</template>

<script setup lang="ts">
import type { ILinkItem } from "types";
import { onMounted, ref } from "vue";

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

<style lang="scss">
@use "sass:map";

.c-social-button {
  [data-theme="light"] & {
    --sb-color: #c6c6c6;
    --sb-hover-color: #f8bb10;
    --sb-bg: #ededed;
    --sb-hover-bg: transparent;
  }

  [data-theme="dark"] & {
    --sb-color: #717273;
    --sb-hover-color: #e0a80d;
    --sb-bg: #3f4040;
    --sb-hover-bg: #323333;
  }

  display: flex;
  align-items: center;
  justify-content: center;

  width: 33px;
  height: 33px;
  border-radius: 2px;
  background-color: var(--sb-bg);
  color: var(--sb-color);
  border: 2px solid var(--sb-bg);

  @include mx.rs-start-at(xl) {
    width: 38px;
    height: 38px;
    border-radius: 3px;
  }

  &:hover {
    color: var(--sb-hover-color);
    background-color: var(--sb-hover-bg);
  }

  & svg {
    width: 1.5rem;
    height: 1.5rem;
  }
}
</style>
