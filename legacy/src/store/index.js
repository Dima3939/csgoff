import Vue from 'vue'
import Vuex from 'vuex'
import userModule from './user'
import generalModule from './general'
import casesModule from './cases'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    userModule, generalModule, casesModule
  }
})
