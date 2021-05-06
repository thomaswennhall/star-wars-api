<template>
  <form class="search-box" v-on:submit.prevent="search">
    <input class="form-element input" type="text" v-model="input" >
    <button class="form-element button search"><img src="../assets/lightsaber.png" alt="search"></button>
    <button class="form-element button reset" @click="reset">reset</button>
  </form>
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

<style lang="scss" scoped>
  .search-box{
    height: 3rem;
    width: 100%;

    display: flex;
    justify-content: center;
    .form-element{
      outline: none;
      border: none;

      height: 100%;

      &.input{
        width: 50%;
        font-size: 2rem;
      }

      &.button{
        background-color: $starwars-yellow;
        padding: 0.2rem;
        width: 10%;

        &.search{
          img{
            height: 100%;
          }
        }
        &.reset{
          background-color: #fff;
        }
      }
    }
  }
</style>