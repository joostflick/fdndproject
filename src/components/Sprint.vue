<template>
<div class="sprint">
  <div class="title">
    <h1>{{ this.sprint }}</h1>
  </div>
  <div class="about">
    <h2>Over deze sprint</h2>
    <p>De opleiding FDND bestaat uit een tribe met daarin een aantal squads, in een squad zitten studenten en docenten. Het eerste semester begint met de sprint Your Tribe: presenteer jezelf en je squad met een eigen website. In deze sprint maak je kennis met je studiegenoten en de opleiding. Je leert je eigen online profielpagina maken en gaat met je Squad een gezamenlijke website maken.
      De focus in deze sprint ligt op kennismaken, samenwerken en hoe je interface en vormgevingsprincipes kan toepassen voor een responsive design.</p>
  </div>
  <div>
    <h3>
      Gedragscriteria
    </h3>
    <ul class="subtasks">
      <li v-for="subtask in gedragscriteria " :key="subtask.id">
        <Subtask :subtask="subtask"></Subtask>
      </li>
    </ul>
  </div>
    <div class="opdrachten">
      <div class="topbar">
        <h3>
          Opdrachten
        </h3>
        <div class="search">
          <input v-model="searchQuery" class="input" type="text" placeholder="Zoeken..." >
        </div>
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
      gedragscriteria: [
        {id: 0, title: 'Development lifecycle', description: 'Je volgt binnen projecten de aangeboden fasering van de development-lifecycle.'},
        {id: 1, title: 'Principes & conventies', description: 'Je past aangeboden principes en conventies op het gebied van frontend, interface design en vormgeving toe.'},
        {id: 2, title: 'Teams', description: 'Je werkt in teams, laat je hierbij begeleiden en geeft feedback aan teamleden.'},
        {id: 3, title: 'Verantwoording', description: 'Je draagt verantwoording voor je eigen resultaten en verwerkt ontvangen feedback.'},
        {id: 4, title: 'Houding', description: 'Je luistert naar wat een ander zegt en neemt dit serieus.'}
      ]
    }
  },
  mounted: function() {
    // fetch assignments and add assignments from the right sprint to the assignments array
    fetch('https://api.github.com/orgs/' + this.team + '/repos')
        .then(res => res.json())
        .then(json => {
          json.forEach(repo => {
            if(repo.topics && repo.topics.some(e => e === (this.sprint))) {
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
    padding: 1em 4em;
    border-radius: 2rem;
  }
  .topbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  div > h3 {
    font-size: 1.5em;
  }
  .title {
    background-color: transparent !important;
    color: #7ce7c9;
  }
  .opdrachten {
    padding-top: 1em !important;
  }
  .opdracht > ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-left: 0;
  }
  .subtasks {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    padding-left: 0
  }
  .subtasks > li {
    width: 13em;
    border-radius: 2rem;
    background-color: #7ce7c9;
    margin: 10px;
    min-height: 210px;
  }

</style>