<template>
  <div class="c-avatar">
    <img :src="imgUrl" alt="" class="c-avatar__img" />
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

defineOptions({
  name: "avatar-item",
});

const props = defineProps<{
  avatarUrl: string;
}>();

const imgUrl = computed(() => `${import.meta.env.BASE_URL}${props.avatarUrl}`);
</script>

<style lang="scss">
.c-avatar {
  &__img {
    border-radius: 50%;
    width: 11rem;

    @include mx.rs-start-at(md) {
      width: 14rem;
    }

    @include mx.rs-start-at(xl) {
      width: 100%;
    }
  }
}
</style>
