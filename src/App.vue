<template>
  <div id="app">
    <img class="logo" src="./assets/star-wars.svg" alt="star wars logo">
    <router-view/>
  </div>
</template>

<style lang="scss">
  #app{
    width: 100vw;
    height: 100vh;
    display: grid;
    align-content: center;
    .logo{
      max-width: 12rem;
    }
  }
</style>
