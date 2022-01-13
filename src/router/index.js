import Vue from "vue";
import VueRouter from "vue-router";
import ProfileLayout from "../layouts/ProfileLayout.vue";
import DepartmentView from "../views/DepartmentView.vue";
import SectionView from "../views/SectionView.vue"
import StateInformationView from "./../views/StateInformationView.vue"
Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "Applayout",
        component: ProfileLayout,
        children: [
            {
                path: "/DepartmentView",
                name: "DepartmentView",
                component: DepartmentView
            },
            {
                path: "/section",
                name: "section",
                component: SectionView
            },
            {
                path: "/stateInformation",
                name: "stateInformation",
                component: StateInformationView
            }
        ],
    },

];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;
