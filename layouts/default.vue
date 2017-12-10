<template>
  <div>
    <app-header></app-header>
    <nuxt/>
  </div>
</template>

<script>
  import Header from '~/components/header'
  export default {
    name: "default",
    components: {
      'app-header': Header
    }
  }
</script>

<style scoped>

</style>
