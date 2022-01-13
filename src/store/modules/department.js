import departmentService from "./../../services/department"
export default {
    namespaced: true,
    
    state: {
        list: []
    },

    getters: {
        list: state =>  state.list || []
    },

    mutations: {
        setState(state, payload){
            state.list = payload; 
        }
    },

    actions: {
        async getList({commit}) {
            const list = await departmentService.getDeparments()
            commit("setState", list.data.record)
        }
    }

}