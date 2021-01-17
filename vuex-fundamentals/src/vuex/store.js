import { createStore } from "vuex";
import { testPosts } from "./testPosts.js";

const delay = () => new Promise((res) => setTimeout(res, 1000));

const posts = {
    namespaced: true,

    state() {
        return {
            count: 0,
            currentPostId: null,
            currenPost: null,
        };
    },
    mutations: {
        increment(state, payload) {
            state.count += payload.number;
        },
        setPostId(state, id) {
            state.currentPostId = id;
        },
        setPost(state, post) {
            state.currentPost = post;
        },
    },
    actions: {
        async fetchDataFromServer(ctx, id) {
            await delay();
            const post = testPosts.find((p) => p.id === id);
            console.log("LOG");
            ctx.commit("setPostId", post.id);
            ctx.commit("setPost", post);
        },
    },
};

export const store = createStore({
    modules: {
        posts,
    },
});
