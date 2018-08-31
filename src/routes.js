import Blog from './Blog.vue'
import Contact from './Contact.vue'
import SinglePost from './SinglePost.vue'


export default [
    {path:'/',component:Blog},
    {path:'/contact',component:Contact},
    {path:'/post/:id',component:SinglePost},
]