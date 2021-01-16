<template>
    <div class="">
        <input type="text" :value="currentHashtag" @input="setCurrentHashtag" />
        <card class="" v-for="post in filteredPosts" :key="post.id">
            <template v-slot:title>
                {{ post.title }}
            </template>
            <template v-slot:content>
                {{ post.content }}
            </template>
            <template v-slot:description>
                <controls :post="post" />
            </template>
        </card>
    </div>
</template>

<script>
import { ref, computed } from "vue";
import { store } from "./microblog/store.js";
import Card from "./components/Card.vue";
import Controls from "./components/Controls.vue";
export default {
    components: {
        Card,
        Controls,
    },
    setup() {
        const setCurrentHashtag = (evt) => {
            store.setHashtag(evt.target.value);
        };
        return {
            filteredPosts: store.filteredPosts,
            setCurrentHashtag,
            currentHashtag: computed(() => store.state.currentHashtag),
        };
    },
};
</script>

<style>
</style>