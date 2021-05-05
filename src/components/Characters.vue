<template>
  <section class="characters">
    <ul>
      <li v-for="character in characters" :key="character.id" >
        {{ character.name }}
      </li>
    </ul>
    <PageButtons />
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

  async mounted() {
    await this.$store.dispatch('updateCharacters')
  }
}
</script>

<style lang="scss" scoped>
  .characters{
    margin: 1rem auto;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>