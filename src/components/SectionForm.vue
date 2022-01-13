<template>
    <v-sheet class="pa-3 grey lighten-4">
        <v-Form ref="form"
            v-model="valid">
            <v-row >
                <v-col cols="12" md="3">
                    <v-text-field
                        outlined
                        dense
                        hide-details="auto"
                        label="code"
                        :rules="rules"
                        v-model="line.code"
                        :disabled="disabledForm"

                    >
                    </v-text-field>
                </v-col>
            </v-row>
            <v-row >
                <v-col cols="12" md="3">
                    <v-autocomplete
                        outlined
                        dense
                        hide-details="auto"
                        label="DepartmentName"
                        :items="departments"
                        item-value="id"
                        item-text="name"
                        :rules="rules"
                        v-model="line.department"
                        :disabled="disabledForm"
                    >
                    </v-autocomplete>
                </v-col>
            </v-row>
            <v-row >
                <v-col cols="12" md="3">
                    <v-text-field
                        outlined
                        dense
                        hide-details="auto"
                        label="Section Name"
                        v-model="line.name"
                        :rules="rules"
                        :disabled="disabledForm"

                    >
                    </v-text-field>
                </v-col>
            </v-row>
        </v-Form>
    </v-sheet>
</template>

<script>
import isRequired from "./../../utilities/isRequired"
export default {
    props: {
        section: Object,
        departments: Array,
        disabledForm: Boolean,
        SelectedSection: Object
    },
    name: 'SectionForm',
    components: {
        
    },
    data() {
        return {
            line: {
               
            },
            rules: [isRequired],
            valid: true
        }
    },
    methods: {
        validateField() {
            this.$refs.form.validate()
        },
        reset() {
            this.$refs.form.reset()
        },
    },
    watch: {
        line: {
            deep: true,
            handler() {
                this.$emit("update", this.line)
            }
        },
        section: {
            deep: true,
            handler(val) {
                this.line = {
                    ...val
                }
            }, 
        }
    }

}
</script>

<style>

</style>