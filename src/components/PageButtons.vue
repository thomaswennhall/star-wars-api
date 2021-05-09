<template>
  <aside class="page-buttons">
    <button @click="prevPage">&#60;</button>
    <p>{{ currentPage }} / {{ lastPage }}</p>
    <button @click="nextPage">&#62;</button>
  </aside>
</template>

<script>
export default {
  computed: {
    currentPage() {
      return this.$store.getters.getCurrentPage
    },
    lastPage() {
      return this.$store.getters.getLastPage
    }
  },

  methods: {
    async prevPage() {
      await this.$store.dispatch('updatePage', 'prev')
      this.$store.dispatch('updateCharacters')
    },
    async nextPage() {
      this.$store.dispatch('updatePage', 'next')
      this.$store.dispatch('updateCharacters')
    }
  }
}
</script>

<style lang="scss" scoped>
.page-buttons{
    display: flex;
    align-items: center;
    place-self: center;

    font-weight: 600;
    color: $starwars-white;

    button{
      outline: none;
      background-color: transparent;
      border: none;
      margin: 0 1rem;

      font-size: 2rem;
      color: $starwars-white;
      
      &:hover{
        color: #FFD624;
      }
    }
  }
</style>