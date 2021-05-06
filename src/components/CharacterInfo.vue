<template>
  <article>
      <ul>
        <li>Birth year: {{ character.birth_year }} <span v-if="bby">*</span></li>
        <li>Height: {{ character.height }} cm</li>
        <li>Weight: {{ character.mass }} kg</li>
        <li>Eye color: {{ character.eye_color }}</li>
        <li>Hair color: {{ character.hair_color }}</li>
        <li>gender: {{ character.gender }}</li>
      </ul>
      <p v-if="bby">*Before <a :href="infoLink" target="_blank">Battle of Yavin</a></p>
    </article>
</template>

<script>
export default {
  props: {
    character: Object
  },
  data(){ return {
    infoLink: 'https://starwars.fandom.com/wiki/Battle_of_Yavin'
  }},
  computed: {
    bby() {
      return this.character.birth_year.endsWith('BBY')
    }
  }
}
</script>

<style>

</style>