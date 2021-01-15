<template>
    <div class="">
        <button @click="increment">
            {{ count }}
        </button>
        <button @click="increase('a')">
            {{ numbers.a }}
        </button>
        <button @click="increase('b')">
            {{ numbers.b }}
        </button>
        {{ total }}
        <hr />
        <button @click="increment">
            {{ count }}
        </button>
        <button @click="a++">
            {{ a }}
        </button>
        <button @click="b++">
            {{ b }}
        </button>
        <div class="" v-for="h in history" :key="h">
            {{ h }}
        </div>
    </div>
</template>

<script>
import { useNumbers } from "./numbers.js";

export default {
    setup() {
        const {
            total,
            increment,
            increase,
            count,
            numbers,
            a,
            b,
            history,
        } = useNumbers();

        return {
            total,
            increment,
            increase,
            count,
            numbers,
            a,
            b,
            history,
        };
    },
};
</script>

<style>
</style>