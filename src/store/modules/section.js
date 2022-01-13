import sectionService from "./../../services/section";
export default {
    namespaced: true,
    
    state: {
        list: []
    },

    getters: {
        list : state => state.list || []
    },
    mutations: {
        setState(state, payload) {
            state.list = payload;
        }
    },
    actions: {
        async getList({commit}) {
            const list = await sectionService.getAll()
            commit("setState", list.data)
        }
    }
}