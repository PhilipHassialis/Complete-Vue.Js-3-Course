import { createRouter, createWebHistory } from "vue-router";
import Hello from "../components/Hello.vue";
import Posts from "../components/Posts.vue";
import Post from "../components/Post.vue";

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            name: "hello",
            path: "/hello",
            component: Hello,
        },
        {
            name: "posts",
            path: "/posts",
            component: Posts,
            children: [
                {
                    name: "post",
                    path: ":id",
                    component: Post,
                },
            ],
        },
    ],
});
