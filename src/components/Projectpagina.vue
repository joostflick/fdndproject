<template>
  <div class="projectpagina">
    <div class="tile">
      <h2>{{ this.repo.full_name }}</h2>
      <p>{{ this.repo.description }}</p>
      <a :href="this.repo.html_url">Bekijk op github</a>
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

</style>