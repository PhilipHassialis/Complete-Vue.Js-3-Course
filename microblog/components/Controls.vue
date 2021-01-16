<template>
    <div class="">
        <div class="like">
            <button @click="like">Like</button>
            <div class="">
                {{ post.likes }}
            </div>
        </div>
        <hashtag
            v-for="hashtag in post.hashtags"
            :key="hashtag"
            :hashtag="hashtag"
        ></hashtag>
    </div>
</template>

<script>
import Hashtag from "./Hashtag.vue";
import { store } from "../microblog/store";

export default {
    components: {
        Hashtag,
    },
    props: {
        post: {
            type: Object,
        },
    },
    setup(props) {
        const like = () => {
            store.incrementLike(props.post);
        };
        return {
            like,
        };
    },
};
</script>

<style scoped>
.like {
    display: flex;
    justify-content: center;
    margin: 10px;
}
</style>