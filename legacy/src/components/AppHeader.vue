<template>
    <div>

    <v-app-bar
            color="amber accent-3 "
            dense
            dark
    >

        <router-link to="/">
        <v-toolbar-title
                class="black--text"
        >
            CSGOff Drop</v-toolbar-title>
        </router-link>

        <v-spacer></v-spacer>

        <v-btn class="black--text" v-for="(item, i) in menuItems" text :key="`menuItem${i}`" :to="item.route">
            {{item.title}}
        </v-btn>

        <v-btn class="black--text" text @click.prevent="signout" v-if="isUserAuthenticated">
            Выйти
        </v-btn>

    </v-app-bar>
    </div>
</template>

<script>
    export default {
        name: 'AppHeader',
        data(){
            return {
                drawer: false,
            }
        },
        computed: {
            isUserAuthenticated(){
                return this.$store.getters.isUserAuthenticated
            },
            menuItems() {
                return this.isUserAuthenticated ? [
                    {
                        title: 'Главная',
                        route: '/',
                    },
                    {
                        title: 'FAQ',
                        route: '/faq',
                    },
                    {
                        title: 'Личный кабинет',
                        route: '/profile',
                    },
                ] :
                    [
                    {
                        title: 'Главная',
                        route: '/',
                    },
                    {
                        title: 'FAQ',
                        route: '/faq',
                    },
                    {
                        title: 'Войти',
                        route: '/signin',
                    },
                    {
                        title: 'Зарегистрироваться',
                        route: '/signup',
                    },
                    ]
            }
        },
        methods:{
            signout(){
                this.$store.dispatch('SIGNOUT')
            }
        }
    }
</script>

<style scoped>
    a {
        text-decoration: none;
    }
</style>