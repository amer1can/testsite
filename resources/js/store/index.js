import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        article: {},
        name: 'vovas'
    },

    actions: {
        getArticleData(context, payload) {
            axios
                .get('/api/article-json')
                .then(response => {
                    context.commit('SET_ARTICLE', response.data.data)
                })
                .catch(err => console.log(err))
        }
    },

    getters: {
        articleViews(state) {
            if (state.article.statistic) {
                return state.article.statistic.views;
            }
        },
        articleLikes(state) {
            if (state.article.statistic) {
                return state.article.statistic.likes;
            }
        },

    },

    mutations: {
        SET_ARTICLE(state, payload) {
            return state.article = payload
        }
    }
})
