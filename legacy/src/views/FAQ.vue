<template>
    <v-main>
            <v-card class="justify-center" style="background-color: transparent;box-shadow: none"
                    align="center">
            <v-card-title class="text-center justify-center py-6"
                          style="background-color: transparent">
                <h1 style="font-size: 100px;margin-top: 50px;margin-bottom: 30px">FAQ</h1>
            </v-card-title>
                <div class="cases_item">
                    <div class="home_title">
                        <h2>ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ</h2>
                    </div>
                </div>
                <v-col
                cols="10"
                >
                    <v-expansion-panels focusable>
                        <v-expansion-panel>
                            <v-expansion-panel-header color="amber accent-3 ">Я открыл кейс, но вещь не приходит, в чем проблема?</v-expansion-panel-header>
                            <v-expansion-panel-content color="#06151a" class="white--text">
                                Зайдите в свой профиль и кликните по ссылке 'ЗАПРОСИТЬ С МАРКЕТА' на интересующем вас предмете.
                            </v-expansion-panel-content>
                        </v-expansion-panel>
                        <v-expansion-panel>
                            <v-expansion-panel-header color="amber accent-3 ">Пополнил счет, а деньги не пришли, почему?</v-expansion-panel-header>
                            <v-expansion-panel-content color="#06151a" class="white--text">
                                Деньги могут прийти не сразу - подождите 1 час. Если не пришли в течение часа - напишите нам на почту (support@easydrop.ru), указав подробные данные платежа.
                            </v-expansion-panel-content>
                        </v-expansion-panel>
                        <v-expansion-panel>
                            <v-expansion-panel-header color="amber accent-3 ">Не могу зайти на сайт через Steam, не грузится страница с кейсами, реклама посреди страницы, да и вообще сайт очень сильно лагает, что делать?</v-expansion-panel-header>
                            <v-expansion-panel-content color="#06151a" class="white--text">
                                Чаще всего проблема кроется либо в антивирусе, который блокирует соединение с сайтом, либо в расширениях для браузера, которые показывают рекламу, и, возможно, также блокируют соединение с сайтом. Попробуйте отключить антивирус и удалить подозрительные расширения в браузере. Рекомендуемый для просмотра сайта браузер - Google Chrome.
                            </v-expansion-panel-content>
                        </v-expansion-panel>
                        <v-expansion-panel>
                            <v-expansion-panel-header color="amber accent-3 ">Предметы продаются автоматически, если их не вывести?</v-expansion-panel-header>
                            <v-expansion-panel-content color="#06151a" class="white--text">
                                Предметы продаются автоматически через месяц.
                            </v-expansion-panel-content>
                        </v-expansion-panel>
                        <v-expansion-panel>
                            <v-expansion-panel-header color="amber accent-3 ">У меня заблокирован вывод вещей, что делать?</v-expansion-panel-header>
                            <v-expansion-panel-content color="#06151a" class="white--text">
                                На проекте запрещено использовать более 1 аккаунта на 1 пользователя. Если вы нарушили это правило - обмен может быть заблокирован НАВСЕГДА.
                            </v-expansion-panel-content>
                        </v-expansion-panel>
                    </v-expansion-panels>
                </v-col>
            </v-card>
    </v-main>
</template>

<script>

</script>

<style scoped>
    .cases_item{
        border-top: 10px outset rgb(252, 186, 3);
        border-top-left-radius: 50px;
        border-top-right-radius: 50px;
        margin-left: 50px;
        margin-right: 50px;
        margin-top: 50px;
    }
    .home_title{
        text-align: center;
        border:5px solid rgb(252, 186, 3);
        border-top-left-radius: 20px;
        border-top-right-radius: 20px;
        border-bottom-left-radius: 50px;
        border-bottom-right-radius: 50px;
        margin-top: 10px;
        display: inline-block;
        background-color: rgb(252, 186, 3);
        margin-bottom: 20px;
        margin-top: 20px;
    }
</style>