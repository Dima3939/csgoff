<template>
    <v-main fluid>
        <v-layout row wrap
                    tag="layout">
            <div
                    class="cases_case"
                    v-for="cases in cases" :key="cases.id" >
                <router-link
                        :to="{name:'case', params:{id:cases.id}}">

                    <img
                            class="case_img"
                            :src="cases.imageUrl">
                    <div class="case_price">
                        <span class="price price-RUB">{{cases.price}} RUB</span>
                    </div>
                    <div class="case_name">
                        {{cases.title}}
                    </div>
                </router-link>
            </div>
        </v-layout>
    </v-main>
</template>

<script>
    export default {
        // props:{
        //     "cases":{
        //         type: Object,
        //         required: true,
        //     }
        // },
        computed:{
            cases(){
                return this.$store.getters.getCases
            }
        }
    }
</script>

<style scoped>
    .layout{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        padding-top: 10px;
    }
    .cases_case{
            position: relative;
        padding: 22px 5px 15px;
        border: 2px solid transparent;
        border-radius: 5px;
        transition: .2s ease-in-out;
        cursor: pointer;

    }
    .cases_case:hover{
        border-color: green;
        border-radius: 10%;
        background-color: #06151a;
    }
    .case_name{
        padding-top: 15px;
        color: white;
    }
    .price-RUB{
        background-color: rgb(252, 186, 3);
        border-radius: 20px;
        border: 8px solid rgb(252, 186, 3);
    }
    h3 {
        margin: 40px 0 0;
    }
    h2 {
        color: black;
    }
    ul {
        list-style-type: none;
        padding: 0;
    }
    li {
        display: inline-block;
        margin: 0 10px;
    }
    a {
        color: black;
        text-decoration: none;
        font-weight: bold;
    }
    .last{
        outline-color: green;
        outline-style: outset;
    }
    .case_img{
        width: 252px;
        height: 194px;
        margin: 0 auto 10px;
    }
    .cases_case a {
        color: #000000 !important;
    }
</style>