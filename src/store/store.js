import Vue from "vue";
import Vuex from "vuex";

import department from "./../store/modules/department";
import section from "./../store/modules/section"

Vue.use(Vuex);

const store = new Vuex.Store({
    modules:{
        department,
        section
    }
})
export default store;
