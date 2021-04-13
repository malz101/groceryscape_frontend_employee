import Vue from 'vue';
import Vuex from 'vuex';
import groceriesService from '../service/groceries.service';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    groceries:[]
  },
  getters:{
    groceries(state){
      return state.groceries;
    } 
  },
  mutations: {
    setGroceries(state, groceries){
      state.groceries = groceries;
    }
  },  
  actions: {
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
