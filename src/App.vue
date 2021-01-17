<template>
  <v-app>
    <span class="bg"></span>
    <AppHeader/>
    <v-main>
    <router-view/>
    </v-main>
    <AppFooter/>
  </v-app>
</template>

<script>
  import AppFooter from './components/AppFooter'
  import AppHeader from './components/AppHeader'

  export default {
      name: 'app',
      components:{
          AppHeader, AppFooter
      }
  }
</script>

<style lang="scss">
#app {
  font-family: Cursive, Avenir, Helvetica, Arial, sans-serif;
  /*-webkit-font-smoothing: antialiased;*/
  /*-moz-osx-font-smoothing: grayscale;*/
  /*color: #2c3e50;*/
}

#nav {
  padding: 30px;
  text-align: right;

  a {
    font-weight: bold;
    color: black;

    &.router-link-exact-active {
      color: rgb(252, 186, 3);
    }
  }
}

.bg {
  width: 100%;
  height: 100%;
  position: absolute;
  background: url( "../src/assets/bg.jpg") no-repeat center center;
  background-size: cover;
  /*transform: scale(1.1);*/
  /*background-attachment: fixed;*/
}

  /*body{*/
    /*background: url("https://cdn.hipwallpaper.com/i/19/88/YtwHJA.jpg");*/
    /*background-attachment: fixed;*/
  /*}*/
footer{
  background-color: rgb(252, 186, 3);
  height: auto;
}
</style>
