<template>
  <div>
    <h1>FDND repos</h1>
    <ul>
      <li v-for="repo in repos" :key="repo.id">
        <Opdracht :data="repo"></Opdracht>
      </li>
    </ul>
  </div>
</template>

<script>
import Opdracht from "@/components/Opdracht";
export default {
  name: 'HelloWorld',
  components: {
    Opdracht
  },
  methods: {
    getGHRepos(team) {
      let result = []
      fetch('https://api.github.com/orgs/' + team + '/repos')
          .then(res => res.json())
          .then(json => {
            result = json
          })
      return result
    }
  },
  data() {
    return {
      team: 'fdnd-task',
      repos: []
    }
  },
  mounted: function() {
    fetch('https://api.github.com/orgs/' + this.team + '/repos')
        .then(res => res.json())
        .then(json => {
          this.repos = json
        })
  }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
  background-color: #9D7BEB;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
