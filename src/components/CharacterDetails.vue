
<template>
  <section class="character-details">
    <button @click="hide" >hide details</button>
    <CharacterInfo :character="character" />
    <button @click="showPlanet" >planet</button>
    <button @click="showStarships" >Starships</button>
    <button @click="showVehicles" >Vehicles</button>
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

<style>

</style>