<template>
<site-template>
  <site-header v-bind:title="title" slot="header"></site-header>
  <div id="app" class="app__content">
    <router-view/>
  </div>
  <site-footer slot="footer" v-bind:copyrights="copyrights"></site-footer>
</site-template>
</template>

<script>
import SiteTemplate from '@/pages/Template'
import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'

export default {
  name: 'app',
  data () {
    return {
      title: 'EVI Excel Import',
      copyrights: '© Deutsche Bahn AG'
    }
  },
  components: {
    SiteTemplate,
    SiteHeader,
    SiteFooter
  }
}
</script>

<style lang="postcss">
@import './assets/css/db-settings.css';

.app{
    &__content {
      flex: 1 1 auto;
      align-self: auto;
      font: var(--db-font-regular);
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      color: var(--db-color-text);
      background-color: var(--db-color-03-01);
      display: flex;
      flex-direction: column;
      flex-wrap: nowrap;
      justify-content: flex-start;
      align-content: stretch;
      align-items: stretch;
    }
}
</style>
