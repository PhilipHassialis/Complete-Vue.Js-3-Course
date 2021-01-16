import { reactive, computed } from "vue";
import { testPosts } from "./testPosts";

class Store {
    constructor() {
        this.state = reactive({
            posts: testPosts,
            currentHashtag: null,
        });
    }

    get filteredPosts() {
        return computed(() =>
            this.state.currentHashtag
                ? this.state.posts.filter((post) =>
                      post.hashtags.includes(this.state.currentHashtag)
                  )
                : this.state.posts
        );
    }

    setHashtag(tag) {
        this.state.currentHashtag = tag;
    }

    incrementLike(post) {
        const thePost = this.state.posts.find((x) => x.id === post.id);
        if (!thePost) return;
        thePost.likes++;
    }
}

export const store = new Store();
