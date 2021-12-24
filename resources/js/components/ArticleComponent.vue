<template>
    <div class="row mt-5">
        <div class="col-12 p-3">
            <img :src="article.img" class="border rounded mx-auto d-block" alt="...">
            <h5 class="mt-5">{{ article.title }}</h5>
            <p>
                <span v-for="(tag,index) in article.tags">
                    <span v-if="(index+1) == tagsLength" class="tag">{{ tag.label }}</span>
                    <span v-else class="tag">{{ tag.label }} |</span>
                </span>

            </p>
            <p class="card-text">{{ article.body }}</p>
            <p>Опубликованно:  <i>{{ article.created_at }}</i></p>
            <div class="mt-3">
                <span class="badge bg-danger">{{ likes }} <i class="far fa-thumbs-up"></i></span>
                <span class="badge bg-danger">{{ views }} <i class="far fa-eye"></i></span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ArticleComponent",
    computed: {
        article() {
            return this.$store.state.article;
        },
        tagsLength() {
            return this.$store.state.article.tags.length;
        },
        views() {
            return this.$store.getters.articleViews;
        },
        likes() {
            return this.$store.getters.articleLikes;
        }
    }
}
</script>

<style scoped>

</style>

