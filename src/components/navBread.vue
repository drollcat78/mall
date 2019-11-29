<template>
  <div>
    <ol class="breadcrumb">
      <li><a href="#">Home</a></li>
      <li class="active"><slot></slot></li>
    </ol>
  </div>
</template>

<script>

  export default {
    name: "navBread",
  }
</script>

<style scoped>
  .breadcrumb {
    margin-bottom: 0;
  }
  a {
    color: #000;
  }
  .active {
    color: orangered;
  }
</style>
