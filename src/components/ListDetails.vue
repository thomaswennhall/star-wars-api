<template>
  <div>
    <p v-if="data.length < 1">Unknown</p>
    <article v-else>
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

<style></style>
