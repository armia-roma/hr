<template>
    <v-tooltip top bottom :color="color">
        <template v-slot:activator="{ on }">
            <v-btn 
                :color="color" 
                :icon="icon"
                @click="handelClick"
                dark v-on="on"
                :disabled="disabled"
            > 
                <v-icon>{{ iconName }}</v-icon>
            </v-btn>
        </template>
        <span>{{text}}</span>
    </v-tooltip>
</template>

<script>
export default {
    props: {
        color: String,
        icon: Boolean,
        iconName: String,
        text: String,
        disabled: Boolean
    },
    methods: {
        handelClick() {
            this.$emit('click')
        }
    }
}
</script>

<style>

</style>