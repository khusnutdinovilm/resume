<template>
  <a :href="href" class="link-button" :target="target">
    <div v-if="htmlContent" class="link-button__content" v-html="htmlContent"></div>
    <div v-else class="link-button__content">
      <slot></slot>
    </div>
  </a>
</template>

<script setup lang="ts">
defineOptions({
  name: "link-button",
});

const { target = "_blank" } = defineProps<{
  href: string;
  target?: string;
  htmlContent?: string;
}>();
</script>

<style lang="scss">
.link-button {
  [data-theme="light"] & {
    --color: #c6c6c6;
    --hover-color: #f8bb10;
    --bg-color: #ededed;
    --hover-bg-color: transparent;
  }

  [data-theme="dark"] & {
    --color: #717273;
    --hover-color: #e0a80d;
    --bg-color: #3f4040;
    --hover-bg-color: #323333;
  }

  display: block;
  width: 33px;
  height: 33px;
  border-radius: 2px;
  background-color: var(--bg-color);
  color: var(--color);
  border: 2px solid var(--bg-color);

  @include mx.rs-start-at(xl) {
    width: 38px;
    height: 38px;
    border-radius: 3px;
  }

  &:hover {
    color: var(--hover-color);
    background-color: var(--hover-bg-color);
  }

  &__content {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  & svg {
    width: 1.5rem;
    height: 1.5rem;
  }
}
</style>
