<template>
  <div class="good-list">
    <div class="good-container" v-for="good in goodList" :key="good.productId">
      <div class="img-wrapper">
        <img v-lazy="good.productImg" :alt="good.productName" :key="good.productImg">
      </div>
      <div class="good-des">
        <span class="good-title">{{ good.productName }}</span>
        <span class="good-price">{{ good.productPrice }}</span>
      </div>
      <div class="add-button" @click="addToCart">
        <span>加入购物车</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "good",
    props: {
      goodList: Array
    },
    data() {
      return {
        goodList1: [{
            id: "001",
            imgUrl: "../../static/images/1.jpg",
            title: "音响",
            price: "100"
          }, {
            id: "002",
            imgUrl: "../../static/images/1.jpg",
            title: "音响",
            price: "100"
          }, {
            id: "003",
            imgUrl: "../../static/images/1.jpg",
            title: "音响",
            price: "100"
          }, {
            id: "004",
            imgUrl: "../../static/images/1.jpg",
            title: "音响",
            price: "100"
          }, {
            id: "005",
            imgUrl: "../../static/images/1.jpg",
            title: "音响",
            price: "100"
          }]
      }
    },
    methods: {
      addToCart() {
        console.log('add to cart')
      }
    }
  }
</script>

<style scoped>
  .good-list {
    display: flex;
    flex-wrap: wrap;
  }

  .good-container {
    border: .02rem solid lightgray;
    box-sizing: border-box;
    width: 32%;
    float: left;
    margin: 0 .66% 1%;
    background-color: #fff;
  }

  .good-container:hover {
    transform: translateY(-5px);
    border-color: darkred;
    transition: transform 1s;
  }

  .img-wrapper {
    padding-bottom: 100%;
    height: 0;
    overflow: hidden;
  }

  img {
    width: 100%;
  }

  .good-title {
    display: block;
    font-size: .32rem;
    margin-left: .12rem;
  }
  .good-price {
    display: block;
    color: #c7254e;
    font-size: .3rem;
    margin: .12rem;
  }
  .add-button {
    border: .02rem solid #c7254e;
    border-radius: .04rem;
    margin: .12rem;
    padding: .1rem 0;
    text-align: center;
    color: #c7254e;
    font-size: .26rem;
  }
  .add-button:hover {
    cursor: default;
  }
</style>
