<template>
  <div class="overzicht">
    <h1>FDND repos</h1>
    <div>
      In deze applicatie kun je de opdrachten en het studentenwerk van FDND bekijken.
      Om een specifieke sprint te bekijken kun je deze rechtsboven selecteren.
    </div>
    <div class="tab">
      <button :class="'tablinks circled left ' + (tabOpen ===0 ? 'selected' : '')" v-on:click="tabOpen = 0">Highlights</button>
      <button :class="'tablinks circled middle ' + (tabOpen ===1 ? 'selected' : '')" v-on:click="tabOpen = 1">Alle opdrachten</button>
      <button :class="'tablinks circled right ' + (tabOpen ===2 ? 'selected' : '')" v-on:click="tabOpen = 2">Studentenwerk</button>
    </div>
    <div v-if="tabOpen === 0">
      <div class="topbar">
        <h3>
          Highlights ({{ this.resultQueryHighlights.length }})
        </h3>
        <div class="search">
          <input v-model="searchQuery" class="input" type="text" placeholder="Zoeken..." >
        </div>
      </div>
      <ul>
        <li v-for="repo in resultQueryHighlights" :key="repo.id">
          <Opdracht :data="repo"></Opdracht>
        </li>
      </ul>
    </div>
    <div v-if="tabOpen === 1">
      <div class="topbar">
        <h3>
          Alle opdrachten ({{ this.resultQueryAllAssignments.length }})
        </h3>
        <div class="search">
          <input v-model="searchQuery" class="input" type="text" placeholder="Zoeken..." >
        </div>
      </div>
      <ul>
        <li v-for="repo in resultQueryAllAssignments" :key="repo.id">
          <Opdracht :data="repo"></Opdracht>
        </li>
      </ul>
    </div>
    <div v-if="tabOpen === 2">
      <div class="topbar">
        <h3>
          Alle studentenwerk ({{ this.resultQueryAllForks.length }})
        </h3>
        <div class="search">
          <input v-model="searchQuery" class="input" type="text" placeholder="Zoeken..." >
        </div>
      </div>
      <ul>
        <li v-for="repo in this.resultQueryAllForks" :key="repo.id">
          <Opdracht :data="repo"></Opdracht>
        </li>
      </ul>
    </div>
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
      fetch('https://api.github.com/orgs/' + team + '/repos', {headers: {
          authorization: process.env.VUE_APP_ENV_GITTOKEN
        }})
          .then(res => res.json())
          .then(json => {
            this.repos = json
            this.repos.forEach(repo => {
              fetch(repo.forks_url, {headers: {
                  authorization: process.env.VUE_APP_ENV_GITTOKEN
                }})
                .then(res => res.json())
                .then(json => {
                  json.forEach(fork => {
                    this.allForks.push(fork)
                    // add starred repositories to the starred forks array
                    if(fork.stargazers_count > 0){
                      this.starredForks.push(fork)
                      // order by forks
                      this.starredForks = this.starredForks.sort((a, b) => {
                        return a.forks_count[1] - b.forks_count[1]
                        })
                    }
                  })
                })
            })
          })
      return result
    }
  },
  data() {
    return {
      team: 'fdnd-task',
      repos: [],
      allForks: [],
      starredForks: [],
      tabOpen: 0,
      searchQuery: null
    }
  },
  mounted: function() {
    this.getGHRepos(this.team)
  },
  computed: {
    resultQueryHighlights(){
      if(this.searchQuery){
        return this.starredForks.filter((item)=>{
          return this.searchQuery.toLowerCase().split(' ').every(v => item.full_name.toLowerCase().includes(v))
        })
      }else{
        return this.starredForks;
      }
    },
    resultQueryAllAssignments(){
      if(this.searchQuery){
        return this.repos.filter((item)=>{
          return this.searchQuery.toLowerCase().split(' ').every(v => item.full_name.toLowerCase().includes(v))
        })
      }else{
        return this.repos;
      }
    },
    resultQueryAllForks(){
      if(this.searchQuery){
        return this.allForks.filter((item)=>{
          return this.searchQuery.toLowerCase().split(' ').every(v => item.full_name.toLowerCase().includes(v))
        })
      }else{
        return this.allForks;
      }
    }
  }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.topbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
div > h3 {
  font-size: 1.5em;
}
.circled {
  color: #050840;
  justify-self: start;
  border: 3px solid #050840;
  font-weight: 100;
  padding: 0.5rem 2rem;
  box-shadow: none;
  margin-left: 0rem;
  background-color: #9D7BEB;
}
.selected {
  background-color: #050840;
  color: white;
}
.left {
  border-radius: 2rem 0 0 2rem;
}
.middle {
  border-radius: 0;
}
.right {
  border-radius: 0 2rem 2rem 0;
}
.overzicht {

  display: flex;
  flex-direction: column;
  align-items: center;

}
.overzicht > div {
  background-color: #9D7BEB;
  width: 60vw;
  margin: 1em 0 1em 0;
  padding: 1em 4em;
  border-radius: 2rem;
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
