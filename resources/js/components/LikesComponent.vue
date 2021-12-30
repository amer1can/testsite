<template>
    <span class="badge likes" @click="addLike()" :class="isLiked ? 'bg-primary' : 'bg-danger'">{{ likesNumber }} <i class="far fa-thumbs-up"></i></span>
</template>

<script>
export default {
    name: "LikesComponent",
    computed: {
        isLiked() {
            return this.$store.state.likeIt
        },
        likesNumber() {
            return this.$store.getters.articleLikes
        }
    },
    methods: {
        addLike() {
            this.$store.dispatch('addLike', {
                slug: this.$store.state.slug,
                inc: this.isLiked
            })
        }
    }
}
</script>

<style scoped>
.likes {
    cursor: pointer;
}
</style>
