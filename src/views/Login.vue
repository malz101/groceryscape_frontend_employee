<template>
    <div class="section">
        <div class="container login-container">
            <span class="logo"><img src="../assets/default.svg" alt="GroceryScape Logo" srcset=""></span>
            <p id="error-text" class="hide error-text">Login Failed. Try Again</p>
            <form>
                <input type="text" placeholder="Username" v-model="username">
                <input type="password" placeholder="Password" v-model="password"> 
                <a type="button" class="btn login-btn" @click="signIn">Log In</a>
            </form>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
    data(){
        return {
            username:'',
            password:''
        }
    },
    computed:{
        ...mapGetters(['isLoggedIn'])
    },
    methods: {
        ...mapActions(['login']),
        async signIn(){
            const form = new FormData();
            form.set('email', this.username);
            form.set('password', this.password);
            const isSignedIn = await this.login(form);
            if(isSignedIn){
                const error = document.getElementById('error-text');
                error.classList.add('hide');
                this.$router.push('/');
            }
            else{
                const error = document.getElementById('error-text');
                error.classList.remove('hide');
            }
        }
    },
}
</script>

<style lang="scss" scoped>
.login-container{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    min-height: 65vh;

    .error-text{
        color: red;
        margin: 0;
    }
    form{
        text-align: center;
        input{
            border: 1px solid black;
            box-sizing: border-box;
            display: block;
            width: 300px;
            padding-left:8px;
            padding-right:8px;
        }
        a{
            background: var(--bg-primary);
            width: 300px;
        }
    }
}
.logo img{
    width: 200px;
    border-radius: 50%;
}
</style>