<template>
  <div class="cards">
    <card
      v-for="pokemon in pokemons"
      :key="pokemon.name"
      @click="click(pokemon)"
      :class="{ opace: selectedId && pokemon.id !== selectedId }"
      class="card"
    >
      <template v-slot:title> {{ pokemon.name }} #{{ pokemon.id }} </template>
      <template v-slot:content>
        <img :src="pokemon.sprite" alt="" />
      </template>
      <template v-slot:description>
        <div class="" v-for="type in pokemon.types" :key="type.name">
          {{ type }}
        </div>
      </template>
    </card>
  </div>
</template>

<script>
import Card from "./Card.vue";
export default {
  components: {
    Card,
  },
  props: {
    selectedId: {
      type: Number,
    },
    pokemons: {
      type: Array,
    },
  },
  methods: {
    click(pokemon) {
      this.$emit("pokemonClicked", pokemon);
    },
  },
};
</script>

<style>
.cards {
  display: flex;
}

.card:hover {
  opacity: 1;
}

.opace {
  opacity: 0.5;
}

img {
  width: 100%;
}
</style>