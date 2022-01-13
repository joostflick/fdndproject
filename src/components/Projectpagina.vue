<template>
  <div class="projectpagina">
    <div class="tile">
      <h2>{{ this.repo.name }}</h2>
      <p>{{ this.repo.full_name }}</p>
      <h3>Omschrijving:</h3>
      <p>{{ this.repo.description }}</p>
      <h3>Onderwerpen:</h3>
      <ul class="topics">
        <li v-for="topic in repo.topics" :key="topic" class="topic">
          {{topic}}
        </li>
      </ul>
      <a :href="this.repo.html_url">Bekijk deze opdracht op github</a>
    </div>
    <div class="tile">
      <h2>Forks:</h2>
      <ul>
        <li v-for="fork in forks" :key="fork.id">
          <Opdracht :data="fork"></Opdracht>
        </li>
      </ul>
      <div v-if="!forks[0]">
        <p>Er zijn geen forks gevonden</p>
      </div>
    </div>
  </div>
</template>

<script>
import Opdracht from "@/components/Opdracht";

export default {
  name: "OpdrachtDetail",
  components: {
    Opdracht
  },
  methods: {
  },
  data() {
    return {
      id: this.$route.params.id,
      repo: {},
      forks: []
    }
  },
  mounted: function() {
    fetch('https://api.github.com/repositories/' + this.id)
        .then(res => res.json())
        .then(json => {
          this.repo = json
          fetch(this.repo.forks_url).then(res => res.json())
              .then(json => {
                this.forks = json
              })
        })
  }
}
</script>

<style scoped>
.projectpagina {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.projectpagina > div {
  background-color: #9D7BEB;
  width: 60vw;
  margin: 1em 0 1em 0;
  padding: 1em 4em;
  border-radius: 2rem;
}
.topics {
  display: flex;
  justify-content: center;
  flex-wrap: wrap
}
.topic {
  background-color: #42b983;
  border-radius: 2em;
  min-width: 3em;
  padding: 0.6em;
  margin: 0.2em;
}
.tile > a {
  color: #050840;
}

</style>