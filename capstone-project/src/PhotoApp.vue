<template>
    <Layout>
        <template v-slot:header> Header {{ loadingMessage }} </template>
        <template v-slot:sidebar>
            <album class="" v-for="album in albums" :album="album"> </album>
        </template>
        <template v-slot:content>
            <router-view />
        </template>
    </Layout>
</template>

<script>
import Layout from "./components/Layout.vue";
import Album from "./components/Album.vue";

export default {
    data() {
        return {};
    },
    async created() {
        this.$store.dispatch("albums/fetchAlbums");
    },
    computed: {
        albums() {
            return this.$store.state.albums.all;
        },
        loadingMessage() {
            return this.$store.state.photos.loading ? " - Loading..." : "";
        },
    },
    methods: {
        fetchPhotosForAlbum(albumId) {
            this.$store.dispatch("photos/fetchPhotosForAlbum", {
                id: albumId,
            });
        },
    },
    watch: {
        $route: {
            handler(val) {
                this.fetchPhotosForAlbum(val.params.id);
            },
            immediate: true,
        },
    },
    components: {
        Layout,
        Album,
    },
};
</script>

<style>
* {
    box-sizing: border-box;
}

body {
    margin: 0;
}
</style>