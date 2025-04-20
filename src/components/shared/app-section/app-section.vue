<template>
  <section class="o-section t-section">
    <div class="o-section__header-bg t-section__header"></div>
    <div class="o-section__content-bg t-section__content"></div>

    <div class="container">
      <div class="o-section__container">
        <div class="o-section__header t-section__header">
          <slot v-if="$slots['section-header']" name="section-header"></slot>
          <div v-else class="o-content">
            <h2 class="o-section__title">
              {{ sectionTitle }}
            </h2>

            <div class="o-section__description">
              {{ sectionDesc }}
            </div>
          </div>
        </div>

        <div class="o-section__content t-section__content">
          <slot name="section-content"></slot>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineOptions({
  name: "app-section",
});

defineProps<{
  sectionTitle?: string;
  sectionDesc?: string;
}>();
</script>

<style lang="scss">
.o-section {
  position: relative;
  display: flex;
  flex-flow: row nowrap;

  &__header-bg,
  &__content-bg {
    display: none;

    @include mx.rs-start-at(lg) {
      display: block;
      position: absolute;
      height: 100%;
      width: 50%;
      z-index: 1;
    }
  }

  &__content-bg {
    right: 0;
  }

  &__container {
    @include mx.rs-start-at(lg) {
      z-index: 2;
      position: relative;
      display: flex;
    }
  }

  &__header {
    padding: 1.75rem 1.75rem 0rem;

    @include mx.rs-start-at(md) {
      padding: 3.15rem 3.5rem 1.4rem;
    }

    @include mx.rs-start-at(lg) {
      width: 30%;
      text-align: right;
    }

    @include mx.rs-start-at(xl) {
      padding: 4.375rem 5.25rem 1.6625rem;
    }
  }

  &__content {
    padding: 1.75rem 1.75rem 0rem;

    @include mx.rs-start-at(md) {
      padding: 3.15rem 3.5rem 1.4rem;
    }

    @include mx.rs-start-at(lg) {
      width: 70%;
    }

    @include mx.rs-start-at(xl) {
      padding: 4.375rem 5.25rem 1.6625rem;
    }
  }

  &__title {
    @include mx.tp-heading-lg();
  }
}

.t-section {
  &__header {
    border-top: 1px solid var(--border-color);
    border-bottom: 1px solid var(--border-color);

    background-color: var(--bg-quaternary);

    [data-theme="light"] & {
      background-color: var(--bg-neutral);
    }

    @include mx.rs-start-at(lg) {
      border: none;

      background-color: var(--bg-secondary);

      [data-theme="light"] & {
        background-color: var(--bg-tertiary);
      }

      @at-root .t-section:nth-child(2n) & {
        background-color: var(--bg-tertiary);

        [data-theme="light"] & {
          background-color: var(--bg-quaternary);
        }
      }
    }
  }

  &__content {
    background-color: var(--bg-primary);

    @include mx.rs-start-at(lg) {
      @at-root .t-section:nth-child(2n) & {
        background-color: var(--bg-secondary);
      }
    }
  }
}
</style>
