<template>
    <div id="single-post">
        <h1>{{post.title}}</h1>
        <p>{{post.body}}</p>
    </div>
</template>

<script>
    export default {
        name: "single-post",
        data(){
            return{
                id:this.$route.params.id,
                post:{}
            }
        },
        created(){
            this.$http.get('https://jsonplaceholder.typicode.com/posts/'+this.id)
                .then(function (data) {
                    this.post=data.body;
                });
        }
    }
</script>

<style scoped>

</style>