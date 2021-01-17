<template>
    <div class="">
        <h4>Posts</h4>
        <div class="">
            <router-link
                v-for="post in testPosts"
                :key="post.id"
                :to="`/posts/${post.id}`"
            >
                {{ post.title }}
            </router-link>
        </div>
        <div class="">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import { watchEffect } from "vue";
import { testPosts } from "../data/testPosts.js";
import { useRoute } from "vue-router";
export default {
    // beforeRouteEnter(to, from, next) {
    //     next({ name: "posts" });
    // },
    // watch: {
    //     $route: {
    //         handler: (val, oldVal) => {
    //             console.log(val);
    //         },
    //         immediate: true,
    //     },
    // },
    setup() {
        const route = useRoute();
        watchEffect(() => {
            console.log(route.params);
        });
        return {
            testPosts,
        };
    },
};
</script>

<style>
</style>