<template>
    <v-sheet class="mt-2">
        <v-Form @submit.prevent="handelSubmit">
            <v-row>
                <v-col cols="12" md="3">
                    <v-text-field
                        hide-details="auto"
                        dense
                        outlined
                        label="Department Code"
                        :rules="codeRules"
                        v-model="department.code"
                    >
                    </v-text-field>
                </v-col>
                <v-col cols="12" md="3">
                    <v-text-field
                        hide-details="auto"
                        label="Deparment Name"
                        outlined
                        dense
                        :rules="nameRules"
                        v-model="department.name"
                    >
                    </v-text-field>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12" md="6">
                    <v-autocomplete
                        hide-details="auto"
                        label="Type"
                        :items="items"
                        item-text="name"
                        item-value="id"
                        v-model="department.type"
                        :rules="typeRules"
                        outlined
                        dense
                    >
                    </v-autocomplete>
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <v-btn @click="handelSubmit">
                        {{ mode }}
                    </v-btn>
                </v-col>
            </v-row>
        </v-Form>

    </v-sheet>
</template>

<script>
export default {
    props: {
        mode: String,
        department: Object
    },
    data(){
        return {
            items: [
                {id: 1, name: 'Admin'},
                {id: 2, name: 'Production' }
            ],
            nameRules: [
                v => !!v || 'Name is required',
                v => (v && v.length <= 10 ) || 'Name must be less than 10 characters',
                v => (v && v.length >= 3) || 'name at least 3 characters'
            ],
            codeRules: [
                v => !!v || 'code is required'
            ],
            typeRules: [
                v => !!v || 'type is required'
            ]
        }
    },  
    methods: {
        handelSubmit(){
            this.$emit("submit", this.department)
        }  
    }
}
</script>

<style>

</style>