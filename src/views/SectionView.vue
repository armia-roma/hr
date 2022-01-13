<template>
    <v-sheet
        rounded
    >
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
            <v-toolbar-title>Section</v-toolbar-title>
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

                    >
                    </v-autocomplete>
                </v-col>
            </v-row>
            <v-spacer></v-spacer>
            <v-btn icon>
                <v-icon>
                    mdi-arrow-collapse-up
                </v-icon>
            </v-btn>     
        </v-toolbar>
        <v-divider></v-divider>  
        <SectionForm 
            v-if="newForm" 
            @update="handelUpdate"
            :departments="departments" 
            ref="sectionForm"
            :disabledForm="disabledForm"
            :section="section"
        />
        <v-snackbar :color="snackbar.color" v-model="snackbar.value">
            {{snackbar.text}}
        </v-snackbar>
    </v-sheet>
</template>

<script>
import sectionService from "./../services/section"
import Ptn from "./../../custom/Ptn"
import SectionForm from "./../components/SectionForm"
import { mapGetters } from "vuex"
export default {
    name: "SectionView",
    components: {
        SectionForm,
        Ptn
    },
    data() {
        return {
            searchToggle: false,
            section: {
               id: null,
               code: "",
               department: null,
               name: ""
            },
            snackbar: {
                value: false, 
                text: "",
                color: ""
            },
            disabledSave: false,
            newForm: false,
            disabledEdit: false,
            disabledForm: false,
            search: '',
            sectionId: null,
            form : {
            }
        }
    },
    methods: {
        async handelSave() {
            if(this.$refs.sectionForm.validateField()){
                try{
                    const response = await sectionService.create(this.form)
                    this.snackbar = {
                        value: true,
                        text: response.data.message,
                        color: "green"
                    }
                    this.disabledSave = true
                    this.disabledEdit = true

                }catch(err){
                    this.snackbar = {
                        value: true,
                        text: err.message,
                        color: "red"
                    }
                }
            }
        },
        handelNewForm() {
            this.disabledForm = false
            this.disabledEdit = true
            this.searchToggle = false
            this.newForm = true
            if(this.section.code || this.section.department || this.section.name){
                this.$refs.sectionForm.reset()
            }
        },
        handelSearch() {
            this.disabledForm = true
            this.newForm = true
            this.searchToggle = !this.searchToggle
        },
        handelEdit() {
            this.disabledForm = !this.disabledForm
        },
        handelChange() {
            // this.disabledForm = true
            this.disabledEdit = false
            // this.newForm = true
            this.section = {
               id: this.selectedSection[0].id,
               code: this.selectedSection[0].code,
               department: this.selectedSection[0].department,
               name: this.selectedSection[0].name
            }

        },
        handelUpdate(form) {
            this.form = {...form}
        }
    },
    computed: {
        ...mapGetters({
            departments: "department/list",
            sections: "section/list"
        }),
        selectedSection() {
            return this.sections.filter(section => section.id == this.sectionId)
        }
    }
}
</script>

<style>

</style>