<template>
  <section class="characters" :class="$mq">
    <article class="character-list" v-if="characters.length > 0">
      <ul>
        <li
          v-for="character in characters"
          :key="character.name"
          @click="showDetails(character)"
          :class="{ highlight: selected == character.name && detailsShowing }"
        >
          {{ character.name }}
        </li>
      </ul>
      <PageButtons @clicked="$emit('clicked')" />
    </article>
    <p v-else-if="loading" class="white-text">loading...</p>
    <p v-else class="white-text">your search gave no results</p>
  </section>
</template>

<script>
import PageButtons from './PageButtons'

export default {
  components: { PageButtons },

  props: {
    detailsShowing: Boolean
  },

  data() {
    return {
      selected: '',
      loading: true
    }
  },

  computed: {
    characters() {
      return this.$store.getters.getCharacters
    }
  },

  methods: {
    async showDetails(character) {
      this.selected = character.name
      this.$emit('showDetails')
      await this.$store.dispatch('updateActiveCharacter', character)
    }
  },

  async mounted() {
    await this.$store.dispatch('updateCharacters')
    this.loading = false
  }
}
</script>

<style lang="scss" scoped>
.characters {
  height: 100%;
  width: 100%;
  margin: 2rem 0;

  .white-text {
    color: $starwars-white;
  }

  .character-list {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 100%;

    ul {
      width: 100%;

      li {
        cursor: pointer;
        padding: 0.6rem;
        width: 100%;

        &:nth-child(odd) {
          background-color: $starwars-white;
          color: $starwars-black;
        }
        &:nth-child(even) {
          color: $starwars-white;
        }
        &:hover,
        &.highlight {
          background-color: transparent;
          color: $starwars-yellow;
        }
      }
    }
  }
  &.laptop,
  &.desktop {
    width: 45%;
    margin: 0;

    ul {
      li {
        &.highlight {
          text-align: right;
          transform: scale(1.2);
        }
      }
    }
  }
}
</style>
