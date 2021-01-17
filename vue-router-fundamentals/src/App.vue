<template>
    <div class="">
        <h3>Title</h3>
        <router-link to="/hello">Hello</router-link> |
        <router-link to="/posts">Posts</router-link>
        <div class="">
            <router-view />
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style>
</style>