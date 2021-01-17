<template>
    <!-- Hello from vuex Count: {{ count }} -->
    <!-- <button @click="increment">Increment</button> -->
    <button
        class=""
        v-for="post in posts"
        :key="post.id"
        @click="fetchPostData(post.id)"
    >
        {{ post.title }}
    </button>
    <div class="">currentPostId: {{ currentPostId }}</div>
    <div class="" v-if="currentPost">
        <h1>{{ currentPost.title }}</h1>
        <p>
            {{ currentPost.content }}
        </p>
    </div>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";

export default {
    setup() {
        const store = useStore();
        const fetchPostData = (id) => {
            store.dispatch("posts/fetchDataFromServer", id);
        };
        const currentPost = computed(() => {
            return store.state.posts.currentPost;
        });
        const currentPostId = computed(() => {
            return store.state.posts.currentPostId;
        });
        return {
            posts: [
                { id: 1, title: "Post #1" },
                { id: 2, title: "Post #2" },
            ],
            fetchPostData,
            currentPost,
            currentPostId,
        };
    },

    // computed: {
    //     count() {
    //         return this.$store.state.posts.count;
    //     },
    //     currentPostId() {
    //         return this.$store.state.posts.currentPostId;
    //     },
    //     currentPost() {
    //         return this.$store.state.posts.currentPost;
    //     },
    // },
    // methods: {
    //     increment() {
    //         this.$store.commit("posts/increment", { number: Math.random() });
    //     },
    //     fetchPostData(id) {
    //         // this.$store.commit("setPostId", id);
    //         this.$store.dispatch("posts/fetchDataFromServer", id);
    //     },
    // },
};
</script>

<style>
</style>