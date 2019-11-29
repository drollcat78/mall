<template>
  <div class="header-container">
    <div class="logo">
      <img src="/static/images/logo.png" alt="网站logo">
    </div>
    <div class="action">
      <div class="button">
        login
      </div>
      <div class="button">
        logout
      </div>
      <div class="button" @click="jumpToCart">
        <span class="glyphicon glyphicon-shopping-cart" aria-hidden="true"></span>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: "navHeader",
    methods: {
      jumpToCart() {
        console.log('jump to cart')
      }
    }
  }
</script>

<style scoped>
  .header-container {
    line-height: 1.6rem;
    height: 1.6rem;
    background-color: #fff;
    font-size: .32rem;
  }

  .logo {
    float: left;
  }

  .action {
    height: inherit;
    float: right;
    margin-right: .2rem;
  }

  .button {
    padding: 0 .1rem;
    float: left;
    max-width: 1.6rem;
  }

</style>
