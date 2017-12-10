<template>
  <header class="header">
    <div class="header__title">
      <h2 class="header__title__top">Metodologías de</h2>
      <h1 class="header__title__bottom">Maquetación</h1>
    </div>
    <div class="header__content">
      <menu-item
          v-for="item in items" :key="item.name"
          :name="item.name"
          :link="item.link">
      </menu-item>
    </div>
  </header>
</template>

<script>
  import menuItem from './header-menu-item'
  export default {
    name: 'app-header',
    data () {
      return {
        items: [{
          name: 'Introducción',
          link: 'introduction'
        }, {
          name: 'Reglas básicas',
          link: 'basic-rules'
        }, {
          name: 'Nomenclatura',
          link: 'nomenclature'
        }, {
          name: 'FlexBox',
          link: 'flexbox'
        }]
      }
    },
    components: {
      'menu-item': menuItem
    }
  }
</script>

<style lang="scss" scoped>
  .header {
    margin: 2rem 0 4rem;
    width: 100%;
  }

  .header__title {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 1rem;

    h2 {
      font-size: 2rem;
      letter-spacing: 0.2rem;
      margin-bottom: 0;
    }
    h1 {
      font-size: 4rem;
      font-weight: 700;
    }
  }

  .header__content {
    display: flex;
    justify-content: center;
  }

  .header__content__menu {
    margin: 0;
    display: flex;
    list-style: none;
  }
</style>
