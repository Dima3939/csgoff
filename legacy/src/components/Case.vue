<template>
    <v-main gris-list-md v-if="cases" fluid>
        <v-layout row wrap
                tag="layout">
            <v-flex xs12 class="item_size"
                    style="text-align: center;">
                <v-flex>
                    <div class="case_name">
                        <h1>{{cases.title}}</h1>
                    </div>
                    <div class="view">
                <img class="case_img"
                     :src="cases.imageUrl">
                        <v-btn
                                color="amber accent-3 "
                                @click="areOptionsVisible = !areOptionsVisible"
                                style="margin-left: 100px;border-radius: 20px;"
                        >Открыть за {{cases.price}} RUB</v-btn>
                    </div>
                </v-flex>
                <v-col md="4"
                     offset-md="4" id="list-demo" v-if="areOptionsVisible">

                <v-carousel
                        :show-arrows="false"
                        cycle
                        height="auto"
                        hide-delimiters="true"
                        interval="500"
                        max="4"
                        width="100%"
                        style="border:5px solid rgb(252, 186, 3);border-radius: 10%;"


                >
    <v-carousel-item
            v-for="content in cases.content"
            :key="content.id"
            width="100%"

    >
      <v-sheet

              height="250"

              style="background-color: rgb(6, 21, 26);"
      >
        <v-row
                class="fill-height"
                align="center"
                justify="center"

        >
          <div class="display-3"
               width="50%">
              <img class="item_img"
                   :src="content.imageUrl">
              <p style="font-weight: bolder;font-size: 15px;">{{content.description}}</p>
              <p class="title" style="color: cadetblue;font-weight: normal;font-size: 12px!important">{{content.title}}</p>
          </div>
        </v-row>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>

                </v-col>
                <div class="cases_item">
                <div class="home_title">
                    <h2>Содержимое кейса</h2>
                </div>
                </div>
            </v-flex>
            <div class="case_item col-10">
            <v-flex v-for="content in cases.content" :key="content.id" style="text-align: center;border-color: green;        border-radius: 10%;
        background-color: #06151a;
        color: white;
margin-right: 6px;margin-bottom: 6px;padding-top: 6px;padding-right: 5px;padding-left: 5px;width: 160px;height: auto;">

                <img class="item_img"
                     :src="content.imageUrl">
                <p style="font-weight: bolder;font-size: 15px;">{{content.description}}</p>
                <p class="title" style="color: cadetblue;font-weight: normal;font-size: 12px!important">{{content.title}}</p>


            </v-flex>
            </div>
        </v-layout>
    </v-main>
</template>

<script>
    export default {
        props:{
            'id':{
                type: String,
                required: true,
            }
        },
        data(){
          return {
              areOptionsVisible: false
          }
        },

        computed: {
            cases(){
                return this.$store.getters.getCases.find(c => c.id == this.id)
            }
        },
    }

</script>

<style scoped>
    .list-item {
        display: inline-block;
        margin-right: 10px;
    }
    .list-enter-active, .list-leave-active {
        transition: all 1s;
    }
    .list-enter, .list-leave-to /* .list-leave-active до версии 2.1.8 */ {
        opacity: 0;
        transform: translateY(30px);
    }
    .item_size{
        width: 406px;
    }
    .view{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
    }
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
        padding: 8px;
        display: inline-block;
        background-color: rgb(252, 186, 3);
        margin-bottom: 20px;
        margin-top: 20px;
    }
    .title{
        font-size: 10px;
    }
    .case_item{
        /*display: flex;*/
        /*flex-direction: row;*/
        justify-content: center;
        flex-wrap: wrap;
        display: grid;

        /* define the number of grid columns */
        grid-template-columns: repeat(8, 1fr);

    }
    .item_img{
        width: 122px;
        height: 91px;
    }
    .case_img{
        width: 406px;
        height: 314px;
        justify-content: center;
        padding-top: 10px;
    }
    .layout{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        padding-top: 10px;
    }
    .case_name{
        padding-top: 15px;
        color: white;
    }
</style>