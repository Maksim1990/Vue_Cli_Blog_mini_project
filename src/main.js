import Vue from 'vue'
import App from './App.vue'
// import Post from './Post.vue'
//
// Vue.component('posts',Post);

import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import Routes from './routes'


Vue.use(VueResource);
Vue.use(VueRouter);
const router=new VueRouter({
routes:Routes,
    mode:'history'
});
export const bus=new Vue()



new Vue({
  el: '#app',
  render: h => h(App),
    router:router
})
