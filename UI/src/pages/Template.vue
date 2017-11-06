<template>
<div class="template">
  <header class="template__header">
    <slot name="header"></slot>
  </header>
  <main class="template__content">
    <slot></slot>
  </main>
  <footer class="template__footer">
    <slot name="footer"></slot>
  </footer>
</div>
</template>

<script>
export default {
  name: 'template'
}
</script>

<style lang="postcss">
@import '../assets/css/db-settings.css';

.template {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-content: stretch;
    align-items: stretch;
    min-height: 100%;

    &__header {
        order: 0;
        flex: 0 1 auto;
        align-self: auto;
    }

    &__content {
        order: 1;
        flex: 1 1 auto;
        align-self: auto;
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        justify-content: flex-start;
        align-content: stretch;
        align-items: stretch;
    }

    &__footer {
        order: 2;
        flex: 0 1 auto;
        align-self: auto;
    }
}
</style>
