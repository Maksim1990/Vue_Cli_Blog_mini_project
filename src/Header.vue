<template>
    <nav>
        <ul>
            <li>
                <router-link to="/" exact>Home</router-link>
                <router-link to="/contact" exact>Contact</router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
    export default {
        name: "header"
    }
</script>

<style scoped>
    .router-link-active{
        background: black;
        border-radius: 20px;
        color: white;
    }
</style>