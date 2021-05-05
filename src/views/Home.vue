<template>
  <div class="home">
    <img class="logo" src="../assets/star-wars.svg" alt="star wars logo">
    <Characters />
    
  </div>
</template>

<script>
import Characters from '@/components/Characters'

export default {
  components: { Characters }
}
</script>

<style lang="scss" scoped>
  .home{
    width: 100%;
    .logo{
      margin: 0 auto;
      max-width: 12rem;
    }
  }
</style>