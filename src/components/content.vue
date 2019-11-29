<template>
  <div class="main-container">
    <div class="sort-order">
      <div class="sort-title">Sort by :</div>
      <div class="order-type">
        <a href="javascript:void(0);">
          <span class="type" @click="resort('default')" :class="{'sort-type': sortType==='default'}">Default</span>
        </a>
        <a href="javascript:void(0);">
          <span class="type" @click="resort('price')" :class="{'sort-type': sortType==='price'}">Price</span>
        </a>
      </div>
    </div>
    <div class="content">
      <div class="left-side">
        <dl class="price-option">
          <dt>Price</dt>
          <dd v-for="option in priceOption" @click="priceFilter(option)"
              :class="{'price-checked': priceChecked===option}">
            <a href="javascript:void(0);"> {{ option }} </a>
          </dd>
        </dl>
      </div>
      <div class="main">
        <good :goodList="goodList"></good>
      </div>
      <div class="right-side">
      </div>
    </div>

  </div>
</template>

<script>
  import good from './good'

  export default {
    name: "mainPart",
    props: {
      goodList: Array
    },
    data() {
      return {
        sortType: "default",
        priceChecked: "all",
        priceOption: [
          "all",
          "0 - 100",
          "101 - 500",
          "501 - 1000",
        ]
      }
    },
    components: {
      good
    },
    methods: {
      resort(type) {
        this.sortType = type
      },
      priceFilter(option) {
        this.priceChecked = option
      }
    }
  }
</script>

<style scoped>
  .main-container {
    /*height: 500px;*/
  }

  a {
    text-decoration: none;
    color: #000;
  }

  .price-checked {
    border-left: solid .04rem darkorange;
    padding-left:  .2rem;
    margin-left: .2rem;
  }

  .price-checked a {
    color: darkorange;
  }

  .sort-type {
    color: darkred;
  }

  .order-type, .sort-title {
    display: inline;
  }

  .order-type, .type {
    margin: 0 .1rem;
  }

  .sort-order {
    margin-top: 1rem;
    padding-right: .2rem;
    height: 1rem;
    line-height: 1rem;
    background-color: #fff;
    text-align: right;
    font-size: .26rem;
  }

  .content {
    display: flex;
    padding: .3rem;
  }

  .left-side, .right-side {
    flex: 1;
  }

  .left-side {
    padding-left: .2rem;
  }

  .price-option dt {
    padding: .2rem;
  }

  .price-option dd {
    padding: .1rem .1rem .1rem .2rem;
    margin-bottom: .4rem;
  }

  .price-option dd:hover {
    border: none;
    border-left: solid .04rem darkorange;
    transform: translateX(.2rem);
    transition: transform 1s;
  }

  .price-option dd:hover a {
    color: darkorange;
  }

  .main {
    flex: 3;
  }

  .right-side {
    flex: 1;
  }


</style>
