# fdnd-platform

Dit is de FDND tasks applicatie. <br><br>

In deze applicatie kun je de opdrachten en het studentenwerk van FDND bekijken.

## Installatie
```
npm install
```

### Project runnen + hot reload
```
npm run serve
```

Om het project goed lokaal te runnen moet je een eigen github token aanvragen en deze in de project environment variables opslaan.
Zonder deze dit token kun je een beperkt aantal requests doen.

### Project builden om deze te kunnen publishen
```
npm run build
```

### Code snippets

[Overzicht component](src/components/Overzicht.vue)


Data for component
```javascript
data() {
    return {
      team: 'fdnd-task',
      repos: [],
      allForks: [],
      starredForks: [],
      tabOpen: 0,
      searchQuery: null
    }
 ```
Call API when mounting the vue component
```javascript
  mounted: function() {
    this.getGHRepos(this.team)
  }
  ```

Retrieve data from the github REST API and order results by amount of forks
```javascript
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
  }
  ```
Dynamically display retrieved data in the template
```html
    <div v-if="tabOpen === 1">
      <div class="topbar">
        <h3>
          Alle opdrachten ({{ this.resultQueryAllAssignments.length }})
        </h3>
        <div class="search">
          <input v-model="searchQuery" class="input" type="text" placeholder="Zoeken..." >
        </div>
      </div>
      <ul class="items">
        <li v-for="repo in resultQueryAllAssignments" :key="repo.id">
          <Opdracht :data="repo"></Opdracht>
        </li>
      </ul>
    </div>
```
Search function
```javascript
computed: {
    resultQueryHighlights(){
      if(this.searchQuery){
        return this.starredForks.filter((item)=>{
          return this.searchQuery.toLowerCase().split(' ').every(v => item.full_name.toLowerCase().includes(v))
        })
      }else{
        return this.starredForks;
      }
    }
 ```

Conditional rendering of the template in [Overzicht component](src/components/Opdracht.vue)

```html
<template>
  <div :class="'tile ' + (data.fork ? 'fork' : '')">
    <div class="title">
      <h3 v-if="data.fork">{{ data.full_name }}</h3>
      <h3 v-if="!data.fork">{{ data.name }}</h3>
      <h3 v-if="!data.fork"><font-awesome-icon icon="code-branch" />{{ ' ' + data.forks_count }}</h3>
      <h3 v-if="data.fork"><font-awesome-icon icon="star" />{{ ' ' + data.stargazers_count }}</h3>
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
```
