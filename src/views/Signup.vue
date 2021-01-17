<template>
    <v-container
            class="fill-height"
            fluid
    >
        <v-row
                align="center"
                justify="center"
        >
            <v-col
                    cols="12"
                    sm="8"
                    md="4"
            >
                <v-card class="elevation-12">
                    <v-toolbar
                            color="amber accent-3"
                            dark
                            flat
                    >
                        <v-toolbar-title
                            class="black--text"
                        >Регистрация</v-toolbar-title>

                    </v-toolbar>
                    <v-card-text>
                        <v-alert :value="error"
                                type="warning">
                            {{error}}
                        </v-alert>
                        <v-form v-model="valid">

                            <v-text-field
                                    label="Email"
                                    name="email"
                                    prepend-icon="mdi-email"
                                    type="email"
                                    v-model="email"
                                    :rules="emailRules"
                            ></v-text-field>

                            <v-text-field
                                    label="Логин"
                                    name="login"
                                    prepend-icon="mdi-account"
                                    type="text"
                                    v-model="login"
                            ></v-text-field>

                            <v-text-field
                                    id="password"
                                    label="Пароль"
                                    name="password"
                                    prepend-icon="mdi-lock"
                                    type="password"
                                    v-model="password"
                                    :rules="passwordRules"
                            ></v-text-field>

                            <v-text-field
                                    label="Trade URL"
                                    name="trade_url"
                                    prepend-icon="mdi-link"
                                    type="text"
                                    v-model="trade_url"
                            ></v-text-field>
                        </v-form>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="black"
                        class="white--text"
                        @click.prevent="signup" :disabled="processing || !valid">Зарегистрироваться</v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    export default {
        // name: 'Singup',
        data(){
            return {
                email: null,
                login: null,
                password: null,
                trade_url: null,
                valid: false,

                emailRules:  [
                    (v) => !!v || 'Введите email',
                    (v) => /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/.test(v) || 'Неправильный email'
                ],
                passwordRules: [
                    (v) => !!v || 'Введите пароль',
                    (v) => (v && v.length >= 6) || 'Пароль слишком короткий - минимум 6 символов'
                ]

            }
        },
        computed: {
            error(){
                return this.$store.getters.getError
            },
            processing(){
                return this.$store.getters.getProcessing
            },
            isUserAuthenticated(){
                return this.$store.getters.isUserAuthenticated
            }
        },
        watch:{
            isUserAuthenticated(val){
                if(val === true){
                    this.$router.push('/')
                }
            }
        },
        methods:{
            signup(){
                this.$store.dispatch('SIGNUP', {email:this.email, login:this.login, password:this.password, trade_url:this.trade_url})
            }
        }

    }
</script>

<style scoped>

</style>