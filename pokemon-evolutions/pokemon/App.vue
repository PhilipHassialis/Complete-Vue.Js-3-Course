<template>
  <div class="">
    <pokemon-cards
      :pokemons="starters"
      @pokemonClicked="fetchEvolutions"
      :selectedId="selectedId"
    />
    <pokemon-cards :pokemons="evolutions" />
  </div>
</template>

<script>
import Card from "./Card.vue";
import PokemonCards from "./PokemonCards.vue";

const api = "https://pokeapi.co/api/v2/pokemon";
const STARTER_IDS = [1, 4, 7];

export default {
  components: {
    Card,
    PokemonCards,
  },
  data() {
    return {
      starters: [],
      evolutions: [],
      selectedId: null,
    };
  },
  async created() {
    const starters = await this.fetchData(STARTER_IDS);
    this.starters = starters;
  },
  // mounted() {},
  methods: {
    async fetchEvolutions(pokemon) {
      this.selectedId = pokemon.id;
      this.evolutions = await this.fetchData([pokemon.id + 1, pokemon.id + 2]);
    },
    async fetchData(ids) {
      const responses = await Promise.all(
        ids.map((id) => fetch(`${api}/${id}`))
      );
      const data = await Promise.all(responses.map((res) => res.json()));
      return data.map((datum) => ({
        id: datum.id,
        name: datum.name,
        sprite: datum.sprites.other["official-artwork"].front_default,
        types: datum.types.map((t) => t.type.name),
      }));
    },
  },
};
</script>

<style  scoped>
</style>