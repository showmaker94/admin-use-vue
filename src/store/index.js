import Vue from 'vue'
import Vuex from 'vuex'
import permission from './modules/permission'
import position from './modules/position'
import tagsView from './modules/tagsView'
import getters from './getters'
Vue.use(Vuex)
const store = new Vuex.Store({
    modules:{
        permission,
        position,
        tagsView
    },
    getters
})
export default store