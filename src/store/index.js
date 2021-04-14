import Vue from 'vue';
import Vuex from 'vuex';
import groceriesService from '../service/groceries.service';
import authService from '../service/auth.service';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLoggedIn: localStorage.getItem('user_id') || '',
    groceries:[]
  },
  getters:{
    isLoggedIn(state){
      if(state.isLoggedIn == '' || state.isLoggedIn == undefined || state.isLoggedIn == null){
        return false;
      }
      return true;
    },
    groceries(state){
      return state.groceries;
    } 
  },
  mutations: {
    setLoggedIn(state, user_id){
      state.isLoggedIn = user_id;
      localStorage.setItem('user_id', user_id);
    },
    setGroceries(state, groceries){
      state.groceries = groceries;
    }
  },  
  actions: {
    login({commit}, payload){
      return authService.login(payload)
      .then((result)=>{
        commit('setLoggedIn', result['id']);
        return true;
      })
      .catch((result)=>{
        return false;
      })
    },
    logout({commit}){
      commit('setLoggedIn', '');
    },
    getGroceries({commit}){
      return groceriesService.getGroceries()
      .then((result)=>{
        commit('setGroceries', result);
      });
    }
  },
  modules: {
  }
})
