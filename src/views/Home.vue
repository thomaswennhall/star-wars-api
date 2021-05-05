<template>
  <div class="home">
    <Characters @showDetails="showDetails" />
    <CharacterDetails v-if="details" @hide="hideDetails"/>
  </div>
</template>

<script>
import Characters from '@/components/Characters'
import CharacterDetails from '@/components/CharacterDetails'

export default {
  components: { Characters, CharacterDetails },

  data(){ return {
    details: false
  }},

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
  .home{
    width: 100%;
    display: flex;
    justify-content: center;
  }
</style>