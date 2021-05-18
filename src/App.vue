<template>
  <div id="app">
    <toolbar v-if="isLoggedIn"></toolbar>
    <toolbar-login v-else></toolbar-login>
    <router-view/>
    <app-footer></app-footer>
  </div>
</template>

<script>
import M from 'materialize-css';
import { mapGetters } from 'vuex';

export default{
  mounted(){
    M.AutoInit();
  },
  computed:{
    ...mapGetters(['isLoggedIn'])
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
  .container{
    width: 90%;
  }


  --bg-primary: #00242c;
  --color-primary: #81e291;
  --color-accent: rgb(240, 249, 255);
  --item-bg-color: rgb(250, 250, 250);
  --cost-color: rgb(4, 175, 4);
  --light-color: rgb(165, 165, 165);

  .bg-primary{
    background: var(--bg-primary);
  }
}
</style>
