<template>
  <section class="characters">
    <article v-if="characters.length > 0">
      <ul>
        <li v-for="character in characters" 
          :key="character.name"
          @click="showDetails(character)"
        >
          {{ character.name }}
        </li>
      </ul>
      <PageButtons />
    </article>
    <p v-else >your search gave no results</p>
  </section>
</template>

<script>
import PageButtons from './PageButtons'

export default {
  components: { PageButtons },

  computed: {
    characters() {
      return this.$store.getters.getCharacters
    }
  },

  methods: {
    async showDetails(character) {
      this.$emit('showDetails')
      await this.$store.dispatch('updateActiveCharacter', character)
    }
  },

  async mounted() {
    await this.$store.dispatch('updateCharacters')
  }
}
</script>

<style lang="scss" scoped>
  .characters{
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }
</style>