
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
  </section>
</template>

<script>
export default {
  data(){ return {
    infoLink: 'https://starwars.fandom.com/wiki/Battle_of_Yavin'
  }},

  computed: {
    character() {
      return this.$store.getters.getActiveCharacter
    }
  },

  methods: {
    hide() {
      this.$emit('hide')
    }
  }
}
</script>

<style>

</style>