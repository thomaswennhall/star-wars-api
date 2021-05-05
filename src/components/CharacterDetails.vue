
<template>
  <section class="character-details">
    <button @click="hide" >hide details</button>
    <article>
      <ul>
        <li>Birth year: {{ character.birth_year }}*</li>
        <li>Height: {{ character.height }} cm</li>
        <li>Weight: {{ character.mass }} kg</li>
        <li>Eye color: {{ character.eye_color }}</li>
        <li>Hair color: {{ character.hair_color }}</li>
        <li>gender: {{ character.gender }}</li>
      </ul>
      <p>*Before <a :href="infoLink" target="_blank">Battle of Yavin</a></p>
    </article>
    <button @click="showPlanet" >planet</button>
    <PlanetDetails v-if="planet" />
  </section>
</template>

<script>
import PlanetDetails from './PlanetDetails'

export default {
  components: { PlanetDetails },
  data(){ return {
    infoLink: 'https://starwars.fandom.com/wiki/Battle_of_Yavin',
    planet: false
  }},

  computed: {
    character() {
      return this.$store.getters.getActiveCharacter
    }
  },

  methods: {
    hide() {
      this.$emit('hide')
    },
    async showPlanet() {
      await this.$store.dispatch('updatePlanet', this.character.homeworld)
      this.planet = true
    }
  }
}
</script>

<style>

</style>