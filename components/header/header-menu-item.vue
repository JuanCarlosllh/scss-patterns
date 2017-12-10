<template>
  <router-link
      :to="link"
      class="menu-item"
      :class="{'menu-item--selected': isActive()}">
    <span>{{ name }}</span>
  </router-link>
</template>

<script>
  export default {
    props: ['name', 'link'],
    name: 'header-menu-item',
    methods: {
      isActive () {
        return this.$route.name === this.link
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '~assets/style/colors';

  .menu-item {
    text-align: center;
    margin: 0 0.5rem;
    padding: 0.5rem 1rem;
    border-radius: 0.2rem;
    cursor: pointer;
    text-decoration: none;
    color: $font-main-color;

    span {
      font-size: 1.1rem;
      font-weight: 400;

      &:hover {
        color: $blue;
      }
    }

    &--selected {
      background-color: $blue;
      span {
        color: white;
        &:hover {
          color: white;
        }
      }
    }
  }
</style>
