<template>
  <div id="app">
    <img class="logo" src="./assets/star-wars-yellow.svg" alt="star wars logo">
    <SearchBox />
    <router-view/>
    <!-- <div>Icons made by <a href="" title="smalllikeart">smalllikeart</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> -->
  </div>
</template>

<script>
import SearchBox from '@/components/SearchBox'
export default {
  components: { SearchBox }
}
</script>

<style lang="scss">
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

  #app{
    width: 100vw;
    height: 100vh;
    padding: 5%;

    background-color: $starwars-black;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    .logo{
      max-width: 12rem;
    }
  }
</style>
