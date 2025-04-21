<template>
  <div class="c-avatar">
    <img :src="avatarUrl" alt="" class="c-avatar__img" />
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: "avatar-item",
});

defineProps<{
  avatarUrl: string;
}>();
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
