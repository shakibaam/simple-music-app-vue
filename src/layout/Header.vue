<template>
    <header class="header">

        <router-link to="/Calender">Calender</router-link>
<!--        <router-link to="/">DC Heros</router-link>-->


    </header>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style scoped>
    .header{
        background: #191970;
        color: #fff;
        text-align: center;
        padding: 10px;
        font-family: "Comic Sans MS";

    }

    .header a{
        color: #fff;
        padding-right: 5px;
    }

</style>