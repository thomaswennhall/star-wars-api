<template>
  <div>
    <input type="text" v-model="input" >
    <button @click="search">search</button>
    <button @click="reset">reset search</button>
  </div>
</template>

<script>
export default {
  data(){ return {
    input: ''
  }},

  methods: {
    async search() {
      await this.$store.dispatch('updateSearchValue', this.input)
      this.$store.dispatch('updateCharacters')
    },
    async reset() {
      this.input = ''
      await this.$store.dispatch('updateSearchValue', '')
      this.$store.dispatch('updateCharacters')
    }
  }
}
</script>

<style>

</style>