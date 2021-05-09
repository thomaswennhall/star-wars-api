<template>
  <form class="search-box" :class="$mq" v-on:submit.prevent="search">
    <input class="form-element input" type="text" v-model="input" >
    <button class="form-element button search"><img src="../assets/lightsaber.svg" alt="search"></button>
    <button class="form-element button reset" @click="reset"><img src="../assets/lightsaber-bw.svg" alt="reset search"></button>
  </form>
</template>

<script>
export default {
  data(){ return {
    input: ''
  }},

  methods: {
    async search() {
      this.input = ''
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
    height: 2.6rem;
    width: 100%;

    display: flex;
    justify-content: center;
    .form-element{
      outline: none;
      border: none;

      height: 100%;

      &.input{
        width: 80%;
        font-size: 1rem;
        padding: 0.6rem;
        background-color: $starwars-white;
      }

      &.button{
        background-color: $starwars-yellow;
        padding: 0.2rem;
        width: 10%;

        cursor: pointer;
        
        img{
          width: 100%;
          &:hover{
            transform: scale(1.1);
          }
        }

        &.reset{
          background-color: $starwars-white;
        }
        &:hover{
          background-color: $starwars-purple;
        }
      }
    }
    &.laptop, &.desktop{
      .input{
        width: 84%;
      }
      .button{
        width: 8%;
        img{
          transform: translate(0.7rem, -1.4rem) rotate(-140deg);
        }
      }
    }
  }
</style>