<template>
  <div class="content">
    <h1>Projectpagina</h1>
    <div>
      <h3>Project:</h3>
      <h4>{{ this.repo.name }}</h4>
      <p>{{ this.repo.full_name }}</p>
      <a :href="this.repo.html_url" target="_blank">Bekijk deze opdracht op github  <font-awesome-icon icon="external-link-alt" /></a>
      <h3>Omschrijving:</h3>
      <p>{{ this.repo.description }}</p>
      <h3>Onderwerpen:</h3>
      <ul class="topics">
        <li v-for="topic in repo.topics" :key="topic" class="topic">
          {{topic}}
        </li>
      </ul>
    </div>
    <button class='circled' v-on:click="toggleInstructions()">{{showInstructions ? 'Verberg instructies' : 'Laat instructies zien '}} <font-awesome-icon v-if="!showInstructions" icon="arrow-down" /><font-awesome-icon v-if="showInstructions" icon="arrow-up" /></button>
    <div v-if="markdownContent && showInstructions">
        <div v-if="showInstructions">
          <markdown-it-vue class='md-content' :content="markdownContent" :options="MDoptions"></markdown-it-vue>
          <button v-on:click="toggleInstructions()">Hide instructions</button>
        </div>
      </div>
    <button v-if="showInstructions" class="circled" v-on:click="toggleInstructions()">Verberg instructies <font-awesome-icon v-if="showInstructions" icon="arrow-up" /></button>
    <div class="tile">
      <h2>Forks:</h2>
      <ul class="items">
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
.topics {
  display: flex;
  justify-content: left;
  flex-wrap: wrap;
  text-align: center;
}
.topic {
  background-color: var(--lavender);
  border-radius: 2em;
  min-width: 3em;
  padding: 0.6em;
  margin: 0.2em;
}
</style>