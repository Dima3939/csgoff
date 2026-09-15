<template>
    <div style="background-color: transparent">
        <v-card class="justify-center" style="background-color: transparent;box-shadow: none"
                align="center">
        <v-card-title class="text-center justify-center py-6"
                      style="background-color: transparent">
            <h1 class="font-weight-bold display-3 ">
                {{username}}
                <v-icon>mdi-steam</v-icon>
            </h1>
        </v-card-title>
        <v-img
                class="text-center justify-center py-6"
                max-height="300"
                max-width="300"
                style="margin-left: auto;
    margin-right: auto;margin-bottom: 20px;border: 2px solid green;
        border-radius: 10px;
        "
                :src="image"></v-img>
            <h2 style="text-align: center">На счету: {{money}} RUB</h2>
        <v-btn
                color="amber accent-3 "

                light
                style="margin-right: auto;margin-left: auto"

        >
            Пополнить счет
        </v-btn>
        </v-card>
        <div class="row vertical-align">
            <div class="col-4"
                 style="word-wrap: break-word;"
            >
                <div style="background-color: transparent">
                    <h2>Данные</h2>
                    <h4>EMAIL : {{email}}</h4>
                    <h4>Login : {{login}}</h4>
                    <h4 style="cursor: pointer;">TradeURL : {{tradeURL}}</h4>
                </div>
            </div>
            <div class="col-8"
                 style="text-align: center">
                <div style="background-color: transparent">
                    <h2 style="text-align: center;margin-right: 50px">Инвентарь</h2>
                    <div style="justify-content: center;
        flex-wrap: wrap;
        display: grid;
        grid-template-columns: repeat(8, 2fr);">
                        <v-flex style="border-color: green;        border-radius: 10%;
        background-color: #06151a;margin-right: 6px;margin-bottom: 6px;padding-top: 6px;padding-right: 5px;padding-left: 5px;width: 160px;height: auto;color:white">

                            <img class="item_img"
                                 :src="imageU1">
                            <p style="font-weight: bolder;font-size: 15px;">{{description1}}</p>
                            <p class="title" style="color: cadetblue;font-weight: normal;font-size: 12px!important">
                                {{title1}}</p>
                        </v-flex>
                        <v-flex style="border-color: green;        border-radius: 10%;
        background-color: #06151a;margin-right: 6px;margin-bottom: 6px;padding-top: 6px;padding-right: 5px;padding-left: 5px;width: 160px;height: auto;color:white">

                            <img class="item_img"
                                 :src="imageU2">
                            <p style="font-weight: bolder;font-size: 15px;">{{description2}}</p>
                            <p class="title" style="color: cadetblue;font-weight: normal;font-size: 12px!important">
                                {{title2}}</p>
                        </v-flex>
                        <v-flex style="border-color: green;        border-radius: 10%;
        background-color: #06151a;margin-right: 6px;margin-bottom: 6px;padding-top: 6px;padding-right: 5px;padding-left: 5px;width: 160px;height: auto;color:white">

                            <img class="item_img"
                                 :src="imageU3">
                            <p style="font-weight: bolder;font-size: 15px;">{{description3}}</p>
                            <p class="title" style="color: cadetblue;font-weight: normal;font-size: 12px!important">
                                {{title3}}</p>
                        </v-flex>
                        <v-flex style="border-color: green;        border-radius: 10%;
        background-color: #06151a;margin-right: 6px;margin-bottom: 6px;padding-top: 6px;padding-right: 5px;padding-left: 5px;width: 160px;height: auto;color:white">

                            <img class="item_img"
                                 :src="imageU4">
                            <p style="font-weight: bolder;font-size: 15px;">{{description4}}</p>
                            <p class="title" style="color: cadetblue;font-weight: normal;font-size: 12px!important">
                                {{title4}}</p>
                        </v-flex>
                        <v-flex style="border-color: green;        border-radius: 10%;
        background-color: #06151a;margin-right: 6px;margin-bottom: 6px;padding-top: 6px;padding-right: 5px;padding-left: 5px;width: 160px;height: auto;color:white">

                            <img class="item_img"
                                 :src="imageU5">
                            <p style="font-weight: bolder;font-size: 15px;">{{description5}}</p>
                            <p class="title" style="color: cadetblue;font-weight: normal;font-size: 12px!important">
                                {{title5}}</p>
                        </v-flex>
                        <v-flex style="border-color: green;        border-radius: 10%;
        background-color: #06151a;margin-right: 6px;margin-bottom: 6px;padding-top: 6px;padding-right: 5px;padding-left: 5px;width: 160px;height: auto;color:white">

                            <img class="item_img"
                                 :src="imageU6">
                            <p style="font-weight: bolder;font-size: 15px;">{{description6}}</p>
                            <p class="title" style="color: cadetblue;font-weight: normal;font-size: 12px!important">
                                {{title6}}</p>
                        </v-flex>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Profile',
        data() {
            return {
                tab: null,
                username: 'Gabe',
                money: '420',
                image: 'https://www.bafta.org/sites/default/files/styles/news_main/public/externals/1603723c7957c50892c3788e2345890a.jpg?itok=0TVReR7c',
                email: 'gaben@valvesoftware.com',
                login: 'gabe_newell',
                tradeURL: 'https://steamcommunity.com/id/me/tradeoffers/privacy#trade_offer_access_url',


                title1: 'Демонтаж',
                description1: 'FAMAS',
                imageU1: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposLuoKhRfwOP3fDhR5OO-m5S0lvnwDLjemm9u5Mx2gv2P9tWmiQPk-xE-YDqlINKUdgQ6YAzTqVm9xuvpjMS5u5zPwXcxunIg7GGdwUK4xWYQ4w/130fx97f/image.png',

                title2: 'Flame Test',
                description2: 'Five-SeveN',
                imageU2: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposLOzLhRlxfbGTjpR09q_goWYkuHxPYTZmX9u-sp1tf_I-oDwnGu4ohQ0J3f1ItXHcVI4YlvWrFXrkO7o1JHquMibmyZguykgtnrUyRXm10sdbbM8m7XAHrBtyPY3/130fx97f/image.png',

                title3: 'Император',
                description3: 'M4A4',
                imageU3: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhnwMzFJTwW09m7hIWZmOXLP7LWnn8fvpRzj72ZoNmsigS1_hdpZDzzIIeVelA2Zl6G_wLoxuvq0MW07c6awWwj5HetHVr5dg/130fx97f/image.png',

                title4: 'Градиент',
                description4: '★ Штык-нож',
                imageU4: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zJcAJE7dizq4yCkP_gfe7QlT9XvJcj2r2S99itigDjrkdoZmqgd4SQclU5aA6Eq1LrxubngJOi_MOelmqWqpk/130fx97f/image.png',

                title5: 'Поверхностная закалка',
                description5: '★ Нож-бабочка',
                imageU5: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf0ebcZThQ6tCvq4GaqPj9P77VqWdY781lxO2Upomt2Fbj-0U5ZD30ctfGe1I8YwzS_FS7yOu61JfttZjAnCNks3I8pSGKtqA3AxE/130fx97f/image.png',

                title6: 'Lore',
                description6: '★ Складной нож',
                imageU6: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1f_BYQJB-eOwmImbqPv7Ib7ummJW4NE_ju-Rpo6m2QziqEJsZm_0IoKSclI8MAvX-QS6k7u-hpG56sidmyRkvT5iuygfdmLhDg/130fx97f/image.png',

            }
        },
    }
</script>

<style scoped>
    h2, h4 {
        margin-bottom: 20px;
        margin-left: 50px;
        text-align: left;
    }

    .vertical-align {
        display: flex;
    }
</style>