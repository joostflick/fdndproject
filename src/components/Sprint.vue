<template>
<div class="sprint">
  <div class="title">
    <h1>{{ this.sprint }} - {{ this.$route.query.sprint.name }}</h1>
  </div>
  <div class="about">
    <h2>Over deze sprint</h2>
    <p>{{ this.$route.query.sprint.description }}</p>
  </div>
  <div class="subtasks">
    <ul>
      <li v-for="subtask in this.$route.query.sprint.gedragscriteria " :key="subtask.id">
        <Subtask :subtask="subtask"></Subtask>
      </li>
    </ul>
  </div>
    <div class="opdrachten">
      <div class="search">
        <input v-model="searchQuery" class="input" type="text" placeholder="Zoeken.." >
      </div>
      <div class="opdracht rounded-corners">
        <ul>
          <li v-for="assignment in resultQuery" :key="assignment.id">
            <Opdracht :data="assignment"></Opdracht>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Subtask from "@/components/Subtask";
import Opdracht from "@/components/Opdracht";
export default {
  name: "Sprint",
  components: {
    Subtask,
    Opdracht
  },
  data() {
    return {
      searchQuery: null,
      assignments: [],
      team: 'fdnd-task',
      sprint: this.$route.params.sprintNr,
    }
  },
  mounted: function() {
    // fetch assignments and add assignments from the right sprint to the assignments array
    fetch('https://api.github.com/orgs/' + this.team + '/repos')
        .then(res => res.json())
        .then(json => {
          json.forEach(repo => {
            if(repo.topics && repo.topics.some(e => e === ('sprint-' + this.sprint))) {
                this.assignments.push(repo)
            }
          })
        })
  },
  computed: {
    resultQuery(){
      if(this.searchQuery){
        return this.assignments.filter((item)=>{
          return this.searchQuery.toLowerCase().split(' ').every(v => item.full_name.toLowerCase().includes(v))
        })
      }else{
        return this.assignments;
      }
    }
  }
}

</script>

<style scoped>
  .sprint {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .sprint > div {
    background-color: #9D7BEB;
    width: 60vw;
    margin: 1em 0 1em 0;
    padding: 0 4em;
    border-radius: 2rem;
  }

  .title {
    background-color: transparent !important;
    color: #7ce7c9;
  }
  .opdrachten {
    padding-top: 1em !important;
  }

</style>