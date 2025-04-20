<template>
  <div class="o-media">
    <div class="o-media__figure">
      <div class="o-media__number">
        <slot name="media-number"></slot>
      </div>
    </div>

    <div class="o-media__body">
      <div class="o-media__title">
        {{ mediaTitle }}
      </div>

      <div v-if="mediaBody" class="o-media__description">
        {{ mediaBody }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: "media-block",
});

defineProps<{
  mediaTitle: string;
  mediaBody?: string;
}>();
</script>

<style lang="scss">
.o-media {
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
