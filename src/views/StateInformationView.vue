<template>
    <v-sheet>
        <v-toolbar
            dense
            dark
            color="grey ligthen-1"
            rounded
        >
            <v-btn icon >
                <v-icon>
                    mdi-arrow-left
                </v-icon>
            </v-btn>    
            <v-toolbar-title>
                State Information
            </v-toolbar-title>
        </v-toolbar>
        <v-toolbar
            dense
            flat    
            class="amber lighten-5"
        >
            <Ptn 
                icon 
                iconName="mdi-plus"
                text="Add new section"  
                color="secondary"
                @click="handelNewForm"  
            >
            </Ptn>
            <v-divider vertical></v-divider>
            <Ptn 
                icon 
                iconName="mdi-content-save"
                text="save"  
                color="secondary"
                @click="handelSave"
                :disabled="disabledSave"  
            >
            </Ptn>
            <v-divider vertical></v-divider>
            <Ptn 
                icon 
                iconName="mdi-magnify"
                text="Search"  
                color="secondary"
                @click="handelSearch"
            >
            </Ptn>
            <v-divider vertical></v-divider>
            <Ptn 
                icon 
                iconName="mdi-pencil"
                text="Edit"  
                color="secondary"
                :disabled="disabledEdit"
                @click="handelEdit"
            >
            </Ptn>
            <v-divider vertical></v-divider>
       </v-toolbar>
       <v-toolbar
        dense
        flat
        v-if="searchToggle"
        class="grey lighten-4"
       >
            <v-row no-gutters>
                <v-col cols="6" md="3">
                    <v-autocomplete
                        outlined
                        hide-details
                        dense 
                        :items="sections"
                        item-value="id"
                        item-text="name"
                        :search-input.sync="search"
                        v-model="sectionId"
                        @change="handelChange"
                        label="Search for state"
                    >
                    </v-autocomplete>
                </v-col>
            </v-row>
            <v-spacer></v-spacer>
            <v-btn icon
                @click="() => this.searchToggle = false"
            >
                <v-icon>
                    mdi-arrow-up
                </v-icon>
            </v-btn>     
        </v-toolbar>
        <v-divider></v-divider>
       <StateInformationForm v-model="state"/>
    </v-sheet>
</template>

<script>
import Ptn from "./../../custom/Ptn"
import StateInformationForm from "./../components/StateInformationForm"
import stateService from "./../services/state"
export default {
    name: "StateInformationView",
    data() {
        return {
            state: {
                id: null,
                code: '',
                name: '',
                leaveDaysForTravel: null
            },
            disabledSave: false,
            disabledEdit: false,
            searchToggle: false
        }
    },
    components:{
        Ptn,
        StateInformationForm
    },
    methods: {
        handelNewForm() {

        },
        handelEdit() {

        },
        handelSearch() {
            this.searchToggle = true
        },
        async handelSave() {
            const response = await stateService.create(this.state)
            console.log(response.data.record)
        }
    }

}
</script>

<style>

</style>