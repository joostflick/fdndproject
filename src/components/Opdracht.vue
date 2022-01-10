<template>
  <div class="tile">
    <h3>{{ data.full_name }}</h3>
    <h3 v-if="data.fork === true">
      Student: {{ data.owner.login }}
    </h3>
    <p>{{ data.description }}</p>
    <ul>
      <li>
        <a :href="data.html_url" target="_blank">Bekijk op github</a>
      </li>
      <li v-if="data.fork !== true">
        <router-link :to="'/projectpagina/' + data.id">Bekijk de projectpagina</router-link>
      </li>
      <li v-else>
        <router-link :to="'/feedback/' + data.id">Bekijk feedback</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Opdracht",
  props: {
    data: Object
  }
}
</script>

<style scoped>
  .tile {
    margin: 10px;
    padding: 10px;
    background-color: #050840;
    color: white;
    min-height: 10em;
    max-width: 50vw;
    min-width: 300px;
    border-radius: 2rem;
  }

  a {
    color: #7ce7c9;
  }

</style>