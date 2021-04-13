<template>
  <div id="app">
    <toolbar></toolbar>
    <router-view/>
    <app-footer></app-footer>
  </div>
</template>

<script>
import M from 'materialize-css';

export default{
  mounted(){
    M.AutoInit();
  }
}

</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  --bg-primary: #00242c;
  --color-primary: #81e291;
}
</style>
