<template>
    <div slot="footer" class="site__footer">
        {{copyrights}}
    </div>
</template>

<script>
export default {
  name: 'site-footer',
  props: ['copyrights']
}
</script>

<style lang="postcss" scoped>
@import '../assets/css/db-settings.css';
.site {
    &__footer {
        padding: calc(var(--db-unit) * .25) var(--content-space-right) calc(var(--db-unit) * .25) var(--content-space-left);
        background-color: var(--db-color-01-00);
        font: var(--db-font-light);
        font-size: 0.7rem;
        line-height: 1rem;
        min-height: calc(var(--db-unit) * .333);
        color: var(--db-color-white);
    }
}
</style>
