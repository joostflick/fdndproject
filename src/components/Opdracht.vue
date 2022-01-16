<template>
  <div :class="'tile ' + (data.fork ? 'fork' : '')">
    <div class="title">
      <h3>{{ data.name }}</h3>
      <h3 v-if="!data.fork"><font-awesome-icon icon="code-branch" />{{ ' ' + data.forks_count }}</h3>
      <h3 v-if="highlight"><font-awesome-icon icon="star" />{{ ' ' + data.stargazers_count }}</h3>
    </div>
      <h4 v-if="data.fork" class="owner">
        Student: {{ data.owner.login }}
      </h4>
    <h4 v-if="data.homepage" class="owner">
      <a :href="data.homepage" target="_blank">Bekijk website <font-awesome-icon icon="external-link-alt" /></a>
    </h4>
    <h4 v-else class="owner">
      {{ data.topics[1] }}
    </h4>
    <p>{{ data.description }}</p>
    <ul>
      <li>
        <a :href="data.html_url" target="_blank">Bekijk op github <font-awesome-icon icon="external-link-alt" /></a>
      </li>
      <li v-if="!data.fork">
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
    data: Object,
    highlight: Boolean
  }
}
</script>

<style scoped>
  .tile {
    display: flex;
    flex-direction: column;
    text-align: left;
    margin: 10px;
    padding: 25px;
    background-color: var(--blueberry);
    color: white;
    width: 50vw;
    border-radius: 2rem;
    text-align: left;
  }
  .fork {
    background-color: var(--blueberry);
  }

  .title {
    display: flex;
    justify-content: space-between;
  }

  .title > h3 {
    margin-top: 0;
  }

  .owner {
    margin-top: 0;
    margin-bottom: 0;
  }

  ul {
    display: flex;
    justify-content: space-between;
    padding-left: 0;
  }

</style>