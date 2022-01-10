<template>
  <div class="tile">
    <h3>{{ data.full_name }}</h3>
    <p>{{ data.description }}</p>
    <ul>
      <li>
        <a :href="data.html_url" target="_blank">Bekijk op github</a>
      </li>
      <li>
        <router-link :to="'/projectpagina/' + data.id">Bekijk de projectpagina</router-link>
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