<template>
  <div class="layout">
    <my-header></my-header>
    <main>
      <nuxt />
    </main>
    <my-footer></my-footer>
  </div>
</template>

<script>
  import Header from '../components/Header'
  import Footer from '../components/Footer'
  export default {
    name: 'layout',

    components: {
      MyHeader: Header,
      MyFooter: Footer
    }
  }
</script>

<style lang="scss">
  .layout {
    min-height: 100%;
    display: flex;
    flex-flow: column;
    padding-top: $nav-link-height + $spacer;

    header,
    footer {
      flex: 0 0 auto;
    }

    & > main {
      flex: 1 0 auto;
    }
  }
</style>
