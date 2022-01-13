<template>
    <v-sheet>
        <v-toolbar
            flat
            dense
            color="grey ligthen-1"
            fluid
            rounded
            >
            <v-btn
              icon
              class="hidden-xs-only"
            >
                <v-icon>mdi-arrow-left</v-icon>
            </v-btn>
            <v-toolbar-title>Department</v-toolbar-title>
        </v-toolbar>
        <v-tabs
            v-model="tab"
            align-with-title
            center-active
            fixed-tabs
        >
            <v-tabs-slider dark color="black"></v-tabs-slider>
            <v-tab>View</v-tab>
            <v-tab>Create Department</v-tab>
        </v-tabs>
        <v-tabs-items v-model="tab">
            <v-tab-item>
                <ViewDepartment/>
            </v-tab-item>
            <v-tab-item>
                <DepartmentFrom mode="save" :department="department" @submit="handelSubmit"/>
            </v-tab-item>
        </v-tabs-items>
        <v-snackbar
            v-model="snackbar.value"
            :color="snackbar.color"
        >
            {{ snackbar.text }}
        </v-snackbar>
    </v-sheet>
</template>

<script>
import departmentService from './../services/department'
import ViewDepartment from './../components/ViewDepartment'
import DepartmentFrom from './../components/DepartmentForm'
export default {
    name: "DepartmentView",
    components:{
        DepartmentFrom,
        ViewDepartment
    },
    data(){
        return {
            tab: 0,
            department: {
                id: null,
                code: '',
                name: '',
                type: null
            },
            snackbar: {
                color: "",
                text: "",
                value: false
            }
        }
    },
    methods: {
        async handelSubmit(department) {
            try{
                let response = await departmentService.create(department);
                this.snackbar = {
                    color: "green",
                    text: response.data.message,
                    value: true
                }
                this.department = {
                    id: null,
                    code: '',
                    name: '',
                    type: null
                }
            }catch(err) {
                this.snackbar = {
                    color: "red",
                    text: err.data.message,
                    value: true
                }
            }
        }
    }
}
</script>

<style>

</style>