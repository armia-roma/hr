<template>
    <v-sheet class="mt-2">
        <v-row>
            <v-col cols="12" md="10">
                <v-toolbar
                    dense
                    color="#eee"
                    rounded
                    flat
                >
                <div class="d-flex justify-start align-center mt-7">
                    <v-autocomplete
                        :search-input.sync="name"
                        v-model="department_id"
                        dense
                        outlined
                        :items="departments"
                        item-text="name"
                        item-value="id"
                        label="Search Department"
                        @change="handelChange" 
                    >
                    </v-autocomplete>
                </div>
                </v-toolbar>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <DepartmentForm mode="edit" v-if="department_id" :department="department" @submit="handelSubmit"/>
            </v-col>
        </v-row>
        <v-snackbar
            v-model="snackbar.value"
            :color="snackbar.color"
        >
            {{ snackbar.text }}
        </v-snackbar>
    </v-sheet>
</template>

<script>
import DepartmentForm from "../components/DepartmentForm"
import DepartmentService from "../services/department"
export default {
    components:{
        DepartmentForm
    },
    data() {
        return {
            name: '',
            departments: [],
            department_id: null,
            department: {
                id: null,
                code: "",
                name: "",
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
        async handelChange() {
            try{
                const response = await DepartmentService.findDepartment(this.department_id)
                this.department = {
                    id: response.data.id,
                    code: response.data.code,
                    name: response.data.name,
                    type: response.data.type
                }
            }catch(err){    
                console.log(err)
            }
        },
        async handelSubmit(department) {
            try{
                const response = await DepartmentService.update(this.department_id, department)
                this.snackbar = {
                    color: "green",
                    text: response.data.message,
                    value: true
                }
            }catch(err){
                this.snackbar = {
                    color: "red",
                    text: err.data.message,
                    value: true
                }
            }
        }
    },
    async mounted() {
        const departments = await DepartmentService.getDeparments()
        this.departments = departments.data.record
    }
}
</script>

<style>

</style>