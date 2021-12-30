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
                <views-component></views-component>
                <likes-component></likes-component>
            </div>
        </div>
    </div>
</template>

<script>
import LikesComponent from "./LikesComponent";
import ViewsComponent from "./ViewsComponent";

export default {
    name: "ArticleComponent",
    components: {
        LikesComponent,
        ViewsComponent},
    computed: {
        article() {
            return this.$store.state.article;
        },
        tagsLength() {
            return this.$store.state.article.tags.length;
        },
    }
}
</script>

<style scoped>

</style>

