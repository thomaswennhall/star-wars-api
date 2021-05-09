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
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap');

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

  #app{
    width: 100vw;
    min-height: 100vh;
    padding: 10%;

    background-color: $starwars-black;

    font-family: 'Roboto', Arial, Helvetica, sans-serif;
    button, input{
      font-family: 'Roboto', Arial, Helvetica, sans-serif;
    }

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    .logo{
      max-width: 12rem;
      margin-bottom: 1rem;
    }

    li{
      list-style-type: none;
    }
  }
</style>
