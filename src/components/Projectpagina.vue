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
      <div v-if="markdownContent">
        <button v-on:click="toggleInstructions()">{{showInstructions ? 'Verberg instructies' : 'Laat instructies zien'}}</button>
        <div v-if="showInstructions">
          <markdown-it-vue class='md-content' :content="markdownContent" :options="MDoptions"></markdown-it-vue>
          <button v-on:click="toggleInstructions()">Hide instructions</button>
        </div>
      </div>
      <a :href="this.repo.html_url" target="_blank">Bekijk deze opdracht op github</a>
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
    toggleInstructions() {
      if (this.showInstructions === true) {
        this.showInstructions = false
      } else {
        this.showInstructions = true
      }
    }
  },
  data() {
    return {
      id: this.$route.params.id,
      repo: {},
      forks: [],
      markdownContent: '',
      showInstructions: Boolean,
      MDoptions: {
        markdownIt: {
          linkify: true,
          html: true,
          validateLink: true
        },
        linkAttributes: {
          attrs: {
            target: '_blank',
            rel: 'noopener'
          }
        }
      }
    }
  },
  mounted: function() {
    fetch('https://api.github.com/repositories/' + this.id)
        .then(res => res.json())
        .then(json => {
          this.repo = json
          fetch('https://raw.githubusercontent.com/'+ this.repo.full_name + '/main/docs/INSTRUCTIONS.md')
              .then(res => res.text())
              .then(data => {
                this.markdownContent = data
              })
          fetch(this.repo.forks_url).then(res => res.json())
              .then(json => {
                this.forks = json
              })
        })
    this.showInstructions = false;
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