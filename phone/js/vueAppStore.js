//state
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    isValidated: false,
    isEditing: false,
    recordList: [],
    markList: [],
    queryShareCodes:[],
    todayShareCodes: [],
    waveData:[]
  },
  mutations: {

  }
});

export default store;

