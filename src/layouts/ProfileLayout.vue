<template>
    <div>
        <v-app-bar dense clipped-left app flat dark color="secondary">
            <v-app-bar-nav-icon></v-app-bar-nav-icon>
            <v-app-bar-title> Human Resources</v-app-bar-title>
        </v-app-bar>
        <v-navigation-drawer app permanent clipped expand-on-hover>
            <v-list dense nav>
                <v-list-group no-action sub-group>
                    <template v-slot:activator>
                        <v-list-item-content>
                            <v-list-item-title>setting</v-list-item-title>
                        </v-list-item-content>
                    </template>

                    <v-list-item
                        link
                        @click="$router.push({ path: '/DepartmentView' })"
                    >
                        <v-list-item-icon>
                            <v-icon>mdi-office-building</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>Department</v-list-item-title>
                    </v-list-item>
					<v-list-item
                        link
                        @click="$router.push({ path: '/section' })"
                    >
                        <v-list-item-icon>
                            <v-icon>mdi-format-section</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>Section</v-list-item-title>
                    </v-list-item>
                    <v-list-item
                        link
                        @click="$router.push({ path: '/stateInformation' })"
                    >
                        <v-list-item-icon>
                            <v-icon>mdi-domain</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>State Information</v-list-item-title>
                    </v-list-item>
                </v-list-group>
            </v-list>
        </v-navigation-drawer>
        <v-container fluid>
            <router-view></router-view>
        </v-container>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
    methods: {
        ...mapActions({
            getDepartments: 'department/getList',
            getSections: 'section/getList'
        })
    },
    async created() {
        await this.getDepartments();
        await this.getSections();
    }
};
</script>

<style></style>
