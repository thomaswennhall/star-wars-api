<template>
  <div id="app" :class="$mq">
    <header>
      <img class="logo" src="./assets/star-wars-yellow.svg" alt="star wars logo">
      <h3 class="heading">CHARACTERS</h3>
      <SearchBox />
    </header>
    <Home />
    <!-- <div>Icons made by <a href="" title="smalllikeart">smalllikeart</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> -->
  </div>
</template>

<script>
import SearchBox from '@/components/SearchBox'
import Home from '@/views/Home'

export default {
  components: { SearchBox, Home }
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

    font-family: 'Roboto', Arial, Helvetica, sans-serif;
    button, input{
      font-family: 'Roboto', Arial, Helvetica, sans-serif;
    }
    li{
      list-style-type: none;
    }

    width: 100vw;
    min-height: 100vh;
    padding: 10%;

    background-color: $starwars-black;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    header{
      text-align: center;

      .logo{
        max-width: 12rem;
      }
      .heading{
        color: $starwars-yellow;
        font-weight: 400;
        letter-spacing: 5px;
        margin-bottom: 1rem;
      }
    }

    &.laptop{
      padding: 5% 14%;
    }
    &.desktop{
      padding: 5% 20%;
    }
  }
</style>
