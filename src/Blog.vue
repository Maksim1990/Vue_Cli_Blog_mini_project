<template>
    <div>
        <h1>{{msg}}</h1>
        <search-bar @search="searchPosts"></search-bar>
        <posts @update="test"></posts>

        <button @click.prevent="post">Send request</button>
        <div>
            <ul>
                <li v-for="post in filteredPosts">
                    <h2 v-font:color>
                        <router-link :to="'/post/'+post.id">{{post.title | to-uppercase}}</router-link></h2>
                    <p>{{post.body}}</p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import Post from './Post.vue'
    import SearchBar from './SearchBar.vue'

    export default {
        components: {
            'posts': Post,
            'search-bar': SearchBar,
        },
        name: 'blog',
        data() {
            return {
                msg: 'Hello to my APP',
                posts:[],
                search:""
            }
        },
        directives:{
            'font':{
                bind(el,binding,vnode){
                    if(binding.arg=='color'){
                        el.style.color='green';
                    }

                }
            }
        },
        filters:{
            toUppercase(value){
                return value.toUpperCase();
            }
        },
        computed:{
            filteredPosts:function(){
                return this.posts.filter((post)=>{
                    return post.title.match(this.search);
                });
            }
        },
        methods: {
            searchPosts(search){
                this.search=search;
            },
            test(test){
                this.msg=test;
                alert(test);
            },
            post:function(){

                // // this.$http.post('https://jsonplaceholder.typicode.com/posts',{
                this.$http.post('https://jsonplaceholder.typicode.com/posts',{
                    "title": "Blog title",
                    "userId": 1,
                    "body": "Test body"
                }).then(function (data) {
                    console.log(data);
                });
                // this.$http.get('https://vue-js-blog-cc46b.firebaseio.com/users.json').then(function (data) {
                //     console.log(data);
                // });

            }
        },
        created(){
            this.$http.get('https://jsonplaceholder.typicode.com/posts')
                .then(function (data) {
                    console.log(data.body);
                    this.posts=data.body;
                });
        }
    }
</script>

<style scoped>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>