<template>
    <div>
        <input type="text" placeholder="Search..." @input="searchLine" v-model="search">
        <p>Searching now: {{search}}</p>
    </div>
</template>

<script>
    import {bus} from './main'
    export default {
        name: "search-bar",
        data(){
            return{
                search:""
            }
        },
        methods:{
            searchLine(){
                this.$emit('search',this.search);
                bus.$emit('updatePost', this.search);
            }
        }
    }
</script>

<style scoped>

</style>