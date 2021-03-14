<template>
  <div id="app">
    <toolbar></toolbar>
    <router-view/>
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
}
</style>
