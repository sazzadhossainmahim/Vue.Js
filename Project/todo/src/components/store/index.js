import Vue from 'vue'
import Vuex from 'vuex'
import state from "./state"
import getters from "./getters"
import mutations from "./mutations"
import action from "./action"


Vue.useAttrs(Vuex)

export default new Vuex.Store({
    state,
    getters,
    mutations,
    action
})