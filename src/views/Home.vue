<template>
  <div class="home" :class="$mq">
    <SearchBox @clicked="hideDetails" />
    <section class="character-components">
      <Characters
        :detailsShowing="details"
        @showDetails="showDetails"
        @clicked="hideDetails"
      />
      <CharacterDetails v-if="details" @hide="hideDetails" />
    </section>
  </div>
</template>

<script>
import SearchBox from '@/components/SearchBox'
import Characters from '@/components/Characters'
import CharacterDetails from '@/components/CharacterDetails'

export default {
  components: { SearchBox, Characters, CharacterDetails },

  data() {
    return {
      details: false
    }
  },

  methods: {
    showDetails() {
      this.details = true
    },
    hideDetails() {
      this.details = false
    }
  }
}
</script>

<style lang="scss" scoped>
.home {
  .character-components {
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
  }

  &.laptop,
  &.desktop {
    .character-components {
      flex-direction: row;
      padding-top: 2rem;
    }
  }
}
</style>
