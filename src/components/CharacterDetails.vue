
<template>
  <section class="character-details" :class="$mq">
    <CharacterInfo @hide="hide" :character="character" />
    <nav class="info-nav">
      <button @click="showPlanet" :class="{highlight: focus.planet}" >Homeworld</button>
      <button @click="showStarships" :class="{highlight: focus.starships}" >Starships</button>
      <button @click="showVehicles" :class="{highlight: focus.vehicles}" >Vehicles</button>
    </nav>
    <PlanetDetails v-if="focus.planet" />
    <ListDetails v-if="focus.starships" :data="starships" />
    <ListDetails v-if="focus.vehicles" :data="vehicles" />
  </section>
</template>

<script>
import CharacterInfo from './CharacterInfo'
import PlanetDetails from './PlanetDetails'
import ListDetails from './ListDetails'

export default {
  components: { CharacterInfo, PlanetDetails, ListDetails },
  data(){ return {
    focus: {
      planet: false,
      starships: false,
      vehicles: false
    }
  }},

  computed: {
    character() {
      return this.$store.getters.getActiveCharacter
    },
     starships() {
      return this.$store.getters.getStarships
    },
    vehicles() {
      return this.$store.getters.getVehicles
    }
  },

  methods: {
    hide() {
      this.$emit('hide')
    },
    toggleShow(toShow) {
      for (const key in this.focus) {
        this.focus[key] = false
      }
      this.focus[toShow] = true
    },
    showPlanet() {
      this.toggleShow('planet')
    },
    showStarships() {
      this.toggleShow('starships')
    },
    showVehicles() {
      this.toggleShow('vehicles')
    }
  }
}
</script>

<style lang="scss">
.character-details{
  width: 100%;

  .hide-button{
    color: $starwars-white;
    &:hover{
      color: $starwars-purple;
    }
  }

  .info-nav{
    display: grid;
    grid-template-columns: repeat(3, 1fr);

    button{
      font-size: inherit;
      outline: none;
      border: none;
      background-color: transparent;
      padding: 0.6rem;
      color: $starwars-white;
      &:hover{
        color: $starwars-yellow;

      }
    }
  }

  &.laptop, &.desktop{
    width: 45%;

    button{
      &.highlight{
        color: $starwars-yellow;
      }
    }
  }
}
</style>