<template>
  <div class="list-details">
    <p v-if="data.length < 1">Unknown</p>
    <article class="details" v-else>
      <ul>
        <li v-for="element in data" 
          :key="element.name"
        >
          {{ element.name }}
        </li>
      </ul>
    </article>
  </div>
</template>

<script>
export default {
  props: {
    data: Array
  }
}
</script>

<style lang="scss" scoped>
  .list-details{
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
