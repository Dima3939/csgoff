<template>
    <div>
        <div class="cases_rare">
            <div class="home_title">
                <h2>КЕЙСЫ</h2>
            </div>
            <div class="main_cases">
                <!--<StyleCases/>-->
                <CasesList/>
            </div>
        </div>
    </div>
</template>

<script>

    import CasesList from '@/components/CasesList.vue'

    export default {
        name: 'MainStr',
        components: {
             CasesList
        }

    }
</script>

<style scoped lang="scss">

    .down{
        border: 10px black;
    }

    h2 {
        color: black;
    }
    .home_title{
        text-align: center;
        border:5px solid rgb(252, 186, 3);
        border-top-left-radius: 20px;
        border-top-right-radius: 20px;
        border-bottom-left-radius: 50px;
        border-bottom-right-radius: 50px;
        margin-top: 10px;
        padding: 8px;
        display: inline-block;
        background-color: rgb(252, 186, 3);
    }
    .main_cases{
        display: flex;
        flex-direction: row;
        justify-content: center;
        flex-wrap: wrap;

    }
    .cases_rare{

        border-top: 10px outset rgb(252, 186, 3);
        border-top-left-radius: 50px;
        border-top-right-radius: 50px;
        margin-left: 50px;
        margin-right: 50px;

    }

</style>
