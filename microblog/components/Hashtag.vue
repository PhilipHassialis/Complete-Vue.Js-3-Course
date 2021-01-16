<template>
    <div class="hashtag" @click="setHashtag">#{{ hashtag }}</div>
</template>

<script>
import { store } from "../microblog/store.js";
export default {
    props: {
        hashtag: String,
    },
    setup(props, ctx) {
        const setHashtag = () => {
            // ctx.emit("setHashtag", props.hashtag);
            store.setHashtag(props.hashtag);
        };
        return {
            setHashtag,
        };
    },
};
</script>

<style scoped>
.hashtag {
    text-decoration: underline;
}
.hashtag:hover {
    color: cornflowerblue;
}
</style>