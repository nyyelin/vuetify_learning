<template>
    <nav>
        <v-app-bar flat app>
            <v-app-bar-nav-icon class="grey--text" @click=" drawer = !drawer"></v-app-bar-nav-icon>
            <v-app-bar-title class="text-uppercase grey--text">
                <span class="font-weight-light">Todo </span>
                <span>Ninja</span>
            </v-app-bar-title>
            <v-spacer></v-spacer> 
            <v-btn text color="grey">
                <span>Sign Out</span>
                <v-icon right>mdi-exit-to-app</v-icon>
            </v-btn>
        </v-app-bar>
        <v-navigation-drawer app v-model="drawer" class="deep-purple lighten-1 text--accent-4">
            <v-list>
                <v-list-item v-for="link in links" :key = "link.text" router :to='link.route'>
                    <v-list-item-action>
                        <v-icon class="white--text">{{link.icon}}</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title v-bind:class="link.active==true ? 'white--text font-weight-bold' : 'white--text' ">
                            {{link.text}}
                        </v-list-item-title>
                        
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
    </nav>
</template>

<script>
    export default {
        name: 'Navbar',
        data() {
            return {
                drawer: false,
                links: [
                    {icon: 'mdi-view-dashboard', text: 'Dashboard', route: '/', active: true},
                    {icon: 'mdi-folder', text: 'My Project', route: '/projects', active: false},
                    {icon: 'mdi-human', text: 'Team', route: '/teams', active: false},
                ]
            }
        },
        // methods: {
        //     clickme(drawer){
        //         this.drawer = !this.drawer;
        //     }
        // }
    }
    
</script>

<style scoped>

</style>