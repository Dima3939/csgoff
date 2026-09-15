<template>
  <div class="home">
    <img alt="site logo" src="../assets/cs_logo.png">
    <h1>DROP</h1>
    <MainStr />
  </div>
</template>

<script>
import MainStr from '@/components/MainStr.vue'

export default {
  name: 'Home',
  components: {
      MainStr
  }
}
</script>

<style scoped>
  h1{
    color: black;
    padding-bottom: 80px;
  }
  .home{
    text-align: center;
  }
  img{
    padding-top: 50px;
    text-align: center;
    width: 20%;
  }
</style>
