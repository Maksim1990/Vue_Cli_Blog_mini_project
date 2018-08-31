<template>
<ul>
    <li v-for="post in posts">{{post}}
    <button  @click="SendMe(post)">{{post}}</button>
        <span>{{searchInfo}}</span>
    </li>
</ul>
</template>

<script>
    import {bus} from './main'
    export default {
        name: "posts",
        data: function () {
            return {
                posts:['post1','post2','post3'],
                searchInfo:'d'
            }
        },
        created(){
            bus.$on('updatePost', (data)=>{
            console.log(data);
            this.searchInfo=data;
        });
        },
        methods:{
            SendMe(post){
                this.$emit('update', post);
            }
        }
    }
</script>

<style scoped>

</style>