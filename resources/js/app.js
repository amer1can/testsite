require('./bootstrap');

window.Vue = require('vue').default;

import store from './store';

Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('article-component', require('./components/ArticleComponent.vue').default);


const app = new Vue({
    store,
    el: '#app',
    created() {
        this.$store.dispatch('getArticleData')
    }
});
