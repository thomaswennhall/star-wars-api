<template>
  <article class="character-info">
    <div class="header">
      <h3 class="name" v-if="$mq === 'mobile'">{{ character.name }}</h3>
      <p class="hide-button" @click="hide">hide details</p>
    </div>
    <ul>
      <li>Birth year: {{ character.birth_year }} <span v-if="bby">*</span></li>
      <li>
        Height: {{ character.height }}
        <span v-if="character.height != 'unknown'">cm</span>
      </li>
      <li>
        Weight: {{ character.mass }}
        <span v-if="character.mass != 'unknown'">kg</span>
      </li>
      <li>Eye color: {{ character.eye_color }}</li>
      <li>Hair color: {{ character.hair_color }}</li>
      <li>gender: {{ character.gender }}</li>
      <li class="info-link" v-if="bby">
        *Before <a :href="infoLink" target="_blank">Battle of Yavin</a>
      </li>
    </ul>
  </article>
</template>

<script>
export default {
  props: {
    character: Object
  },
  data() {
    return {
      infoLink: 'https://starwars.fandom.com/wiki/Battle_of_Yavin'
    }
  },
  computed: {
    bby() {
      return this.character.birth_year.endsWith('BBY')
    }
  },
  methods: {
    hide() {
      this.$emit('hide')
    }
  }
}
</script>

<style lang="scss" scoped>
.character-info {
  display: flex;
  flex-direction: column;
  align-items: left;
  width: 100%;

  .header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.6rem;
    .name {
      color: $starwars-yellow;
    }
    .hide-button {
      cursor: pointer;
      font-size: 0.8rem;
    }
  }
  ul {
    width: 100%;
    background-color: $starwars-white;

    li {
      width: 100%;
      padding: 0.6rem;
      color: $starwars-black;
    }
  }

  a {
    color: inherit;
    &:hover {
      color: $starwars-purple;
    }
  }
}
</style>
