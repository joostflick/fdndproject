<template>
<div class="sprint">
  <div class="title">
    <h1>Sprint 2</h1>
  </div>
  <div class="about">
    <h2>Over deze sprint</h2>
    <p>Het programma van FDND bestaat uit 4 semesters. Semester 1, 2 en 3 bestaan ieder uit 6 sprints. Ieder sprint heeft een eigen thema, waarin bijpassende opdrachten/leertaken worden aangeboden. Het 4e semester bestaat uit een einproject en vrije invulling.

      De vaardigheden van deze sprint zijn onderverdeeld in subtasks</p>
  </div>
  <div class="subtasks">
    <ul>
      <li v-for="subtask in subtasks" :key="subtask.id">
        <Subtask :subtask="subtask"></Subtask>
      </li>
    </ul>
  </div>
    <div class="Opdrachten">
      <div class="opdracht">
        <ul>
          <li v-for="assignment in assignments" :key="assignment.id">
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
      subtasks: [
        {
          id: 0,
          name: 'Subtask 1',
          description: 'Dit is subtask 1'
        },
        {
          id: 1,
          name: 'Subtask 2',
          description: 'Dit is subtask 2'
        },
        {
          id: 2,
          name: 'Subtask 3',
          description: 'Dit is subtask 3'
        },
        {
          id: 3,
          name: 'Subtask 4',
          description: 'Dit is subtask 4'
        }
      ],
      assignments: [],
      team: 'fdnd-task',
      sprint: this.$route.params.sprint,
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
    width: 80vw;
    margin: 1em 0 1em 0;
  }

</style>