<template>
  <section class="characters">
    <article class="character-list" v-if="characters.length > 0">
      <ul>
        <li
          v-for="character in characters"
          :key="character.name"
          @click="showDetails(character)"
        >
          {{ character.name }}
        </li>
      </ul>
      <PageButtons />
    </article>
    <p v-else>your search gave no results</p>
  </section>
</template>

<script>
import PageButtons from "./PageButtons";

export default {
  components: { PageButtons },

  computed: {
    characters() {
      return this.$store.getters.getCharacters;
    },
  },

  methods: {
    async showDetails(character) {
      this.$emit("showDetails");
      await this.$store.dispatch("updateActiveCharacter", character);
    },
  },

  async mounted() {
    await this.$store.dispatch("updateCharacters");
  },
};
</script>

<style lang="scss" scoped>
.characters {
  height: 100%;
  width: 100%;
  margin: 2rem 0;

  .character-list {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    
    ul {
      width: 100%;

      li {
        cursor: pointer;
        padding: 0.6rem;
        width: 100%;

        &:nth-child(odd) {
          background-color: $starwars-white;
          color: $starwars-black;
        }
        &:nth-child(even) {
          color: $starwars-white;
        }
        &:hover {
          background-color: $starwars-black;
          color: $starwars-yellow;
        }
      }
    }
  }
  @media only screen and (min-width: 400px){
    width: 50%;

    ul{
      padding: 1rem;
    }
  }
}
</style>
