<template>
    <div slot="header">
        <div class="site__header">
          <div class="site__header--left">
            <Logo class="site__logo" />
            <h3 class="site__title">{{ title }}</h3>
          </div>
          <div class="site__header--center">
          </div>
          <div class="site__header--right">
          </div>
        </div>
        <nav class="site__navigation"></nav>
    </div>
</template>

<script>
import Logo from '@/assets/icons/dblogo.svg'
export default {
  name: 'site-header',
  props: ['title'],
  methods: {
  },
  components: {
    Logo
  }
}
</script>

<style lang="postcss" scoped>
@import '../assets/css/db-settings.css';
.site {
    &__header {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: flex-start;
        align-content: stretch;
        align-items: stretch;
        box-sizing: border-box;
        user-select: none;

        &--left, &--right {
            order: 0;
            flex: 0 1 auto;
            align-self: auto;
            display: flex;
            flex-direction: row;
            flex-wrap: nowrap;
            justify-content: flex-start;
            align-content: stretch;
            align-items: stretch;

            & > * {
                flex: 0 1 auto;
                align-self: auto;
            }
        }

        &--right {
            order: 2;
        }

        &--center {
            order: 1;
            flex: 1 1 auto;
            align-self: auto;
            text-align: center;
        }
    }

    &__logo {
      display: inline-block;
      padding: var(--db-unit-half) var(--db-unit) var(--db-unit-half) var(--db-unit-half);
      width: var(--db-unit);
      height: calc(var(--db-unit) * .7);
      user-select: none;
    }

    &__title {
      display: inline-block;
      font: var(--db-font-regular);
      font-size: var(--db-unit-half);
      line-height: calc(var(--db-unit) * 1.7);
      margin: 0;
      padding: 0;
    }

    &__navigation {
        background-color: var(--db-color-01-00);
        padding: 0 var(--content-space-right) 0 var(--content-space-left);
        min-height: var(--db-unit-half);
        user-select: none;

        &-link {
            display: inline-block;
            padding: 0 var(--db-unit-half);
            font: var(--db-font-head);
            text-decoration: none;
            line-height: var(--db-unit);
            color: var(--db-color-white);

            &:first-child {
                margin-left: calc(var(--db-unit-half) * -1);
            }

            &.router-link-active {
                background-color: var(--db-color-01-05);
            }
        }

        &-icon .icon {
            display: inline-block;
            padding: var(--db-unit-half) var(--db-unit-half) 0 var(--db-unit-half);
            height: calc(var(--db-unit) * .7);
            width: auto;
            cursor: pointer;
        }
    }
}
</style>
