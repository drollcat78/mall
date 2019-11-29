<template>
  <div class="home-container">
    <nav-header></nav-header>
    <nav-bread>
      <slot>Goods</slot>
    </nav-bread>
    <main-part :goodList="goodList"></main-part>
    <nav-footer></nav-footer>
  </div>
</template>

<script>
  import navHeader from '../header'
  import navBread from '../navBread'
  import navFooter from '../footer'
  import mainPart from '../content'
  import axios from 'axios'

  export default {
    name: "home",
    data() {
      return {
        goodList: []
      }
    },
    components: {
      navHeader,
      navBread,
      navFooter,
      mainPart
    },
    methods: {
      getInfo() {
        axios.get('/api/goodList.json').then(res => {
          this.goodList = res.data.data;
        })
      }
    },
    mounted() {
      this.getInfo()
    }
  }
</script>

<style scoped>
  .home-container {
    background-color: #f5f7fc;
  }
</style>
