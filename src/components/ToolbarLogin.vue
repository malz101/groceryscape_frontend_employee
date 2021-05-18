<template>
    <div class="toolbar">
        <div class="header-bar">
            <span id="brand">  <router-link to="/"><img src="../assets/default.svg" alt="" srcset=""></router-link> </span>
            <div class="search-div">
                <input type="search" name="" id="" placeholder="Enter Search Here...">
                <a href="#" class="btn">Search</a>
            </div>
            <div class="cart-login-container"> 
                <span class="login">
                    <a href="/login" class="btn-small">Login</a>
                </span>
            </div>
        </div>
        <div class="container">
            <nav class="nav-wrapper">
                <div class="toolbar">
                <router-link to="/" class="brand-logo left right-padding"> 
                    <span>Home</span>
                </router-link>
                    <ul id="nav-mobile" class="right">
                        <li><router-link to="/shop">Shop</router-link></li>
                        <li><router-link to="#">Categories</router-link></li>
                        <li><router-link to="#" id="admin">Contact</router-link></li>
                        <li><router-link to="/about">About Us</router-link></li>
                    </ul>
                </div>
            </nav>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
    methods:{
        ...mapActions(['logout']),
        async signOut(){
            await this.logout();
            this.$router.push('/login');
        },
        async signIn(){

        },
        async signUp(){

        }
    },
    computed:{
        ...mapGetters(['cartAmount'])
    }
}
</script>

<style lang="scss" scoped>
.header-bar{
    width: 100%;
    background: var(--bg-primary);
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    padding-left: 60px;
    padding-right: 60px;
    #brand{
        width: 100px;
        font-weight: bold;
        font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        color: black;
    }
    .search-div{
        display: flex;
        align-items: flex-start;
        a{  
            display: flex;
            align-items: center;
            box-shadow: none;
            height: 35px;
            background: var(--color-primary);
            color: #00242c;
            border-radius: 0;
        }
        input{
            width: 500px;
            background: white;
            padding: 16px;
            box-sizing: border-box;
            height: 35px;
        }
    }  
    .cart-login-container{
        a{
            background: var(--color-primary);
            color: #00242c;
            border-radius:0 ;
        }
    }  
}

nav {
  padding-left: 16px;
  padding-right: 16px;
  background: white;
  box-shadow: none;
  a{
      color: black;
      font-size: 16px;
  }
}

@media screen and (max-width:800px) {
    .header-bar{
        justify-content: space-evenly;
        .search-div{
            margin-bottom: 40px;
            order: 3;
            input{
                width: 200px;
                height: 30px;
                padding: 8px;
            }
            a{
                height: 30px;
            }
        }
    }

    
}
</style>