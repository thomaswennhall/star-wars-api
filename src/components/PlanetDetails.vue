<template>
  <div class="planet-details">
    <p v-if="planet.name == 'unknown'">Unknown</p>
    <article class="details" v-else>
      <h3>{{ planet.name }}</h3>
      <ul>
        <li>Diameter: {{ planet.diameter }} km</li>
        <li>Gravity: {{ planet.gravity }}</li>
        <li>Orbital period: {{ planet.orbital_period }} local days</li>
        <li>Rotation period: {{ planet.rotation_period }} standard hours</li>
        <li>Terrain: {{ planet.terrain }}</li>
        <li>Climate: {{ planet.climate }}</li>
        <li>Population: {{ planet.population }}</li>
      </ul>
    </article>
  </div>
</template>

<script>
export default {
  computed: {
    planet() {
      return this.$store.getters.getPlanet;
    }
  }
}
</script>

<style lang="scss" scoped>
  .planet-details{
    background-color: $starwars-white;
    padding: 0.6rem;

    .details{
      ul{
        li{
          padding: 0.3rem 0;
        }
      }
    }
  }
</style>
