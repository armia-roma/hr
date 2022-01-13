<template>
    <v-sheet class="pa-3">
        <v-form>
            <v-row>
                <v-col cols="12" md="3">
                    <v-text-field
                        label="State Code"
                        outlined
                        dense
                        hide-details="auto"
                        v-model="line.code"
                    >
                    </v-text-field>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12" md="3">    
                    <v-text-field
                        label="State Name"
                        outlined
                        dense
                        hide-details="auto"
                        v-model="line.name"
                    >
                    </v-text-field>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12" md="3">    
                    <v-text-field
                        label="Leave Days For Travel"
                        outlined
                        dense
                        hide-details="auto"
                        v-model="line.leaveDaysForTravel"
                    >
                    </v-text-field>
                </v-col>
            </v-row>
        </v-form>
    </v-sheet>
</template>

<script>
export default {
    name: "StateInformationForm",
    props: {
        value: Object
    },
    data() {
        return {
            line: { ...this.value }
        }
    },
    watch: {
        line: {
            deep: true,
            handler() {
                this.$emit("input", this.line)
            }
        }
    }
}
</script>

<style>

</style>