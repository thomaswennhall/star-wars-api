<template>
  <div class="home" :class="$mq">
    <Characters :detailsShowing="details" @showDetails="showDetails" @clicked="hideDetails"/>
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
    justify-content: space-between;
    flex-direction: column;

    &.laptop, &.desktop{
      flex-direction: row;
      padding-top: 2rem;
    }
  }
</style>