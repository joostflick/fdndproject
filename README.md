# fdnd-platform

Dit is de FDND tasks applicatie. <br><br>

In deze applicatie kun je de opdrachten en het studentenwerk van FDND bekijken.

De gehele applicatie is clientside en gemaakt met het vue framework.

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
```
VUE_APP_ENV_GITTOKEN: YOUR_GITHUB_TOKEN
```

### Project builden om deze te kunnen publishen
```
npm run build
```

### Dependencies
- MarkDownItVue

Read-me's van projecten converteren naar html templates om deze weer te geven op de projectpagina

- Fontawesome icons

Iconen 



### Routes
```javascript
const routes = [
    { path: '/', redirect: '/home/' },
    { path: '/home', component: Overzicht },
    { path: '/projectpagina/:id', component: Projectpagina },
    { path: '/sprint/:sprintNr', component: Sprint },
    { path: '/feedback/:id', component: Feedback},
    { path: '/discussion/:id', component: Discussion},
    { path: "*", component: PageNotFound }
]
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
<details>
    <summary> Data structure API response </summary>

```javascript
    {
        "id": 438262366,
        "node_id": "R_kgDOGh9aXg",
        "name": "fix-the-flow-structural-navigation",
        "full_name": "fdnd-task/fix-the-flow-structural-navigation",
        "private": false,
        "owner": {
            "login": "fdnd-task",
            "id": 62932179,
            "node_id": "MDEyOk9yZ2FuaXphdGlvbjYyOTMyMTc5",
            "avatar_url": "https://avatars.githubusercontent.com/u/62932179?v=4",
            "gravatar_id": "",
            "url": "https://api.github.com/users/fdnd-task",
            "html_url": "https://github.com/fdnd-task",
            "followers_url": "https://api.github.com/users/fdnd-task/followers",
            "following_url": "https://api.github.com/users/fdnd-task/following{/other_user}",
            "gists_url": "https://api.github.com/users/fdnd-task/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/fdnd-task/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/fdnd-task/subscriptions",
            "organizations_url": "https://api.github.com/users/fdnd-task/orgs",
            "repos_url": "https://api.github.com/users/fdnd-task/repos",
            "events_url": "https://api.github.com/users/fdnd-task/events{/privacy}",
            "received_events_url": "https://api.github.com/users/fdnd-task/received_events",
            "type": "Organization",
            "site_admin": false
        },
        "html_url": "https://github.com/fdnd-task/fix-the-flow-structural-navigation",
        "description": "Teken een structural navigatie systeem met feedback en states",
        "fork": false,
        "url": "https://api.github.com/repos/fdnd-task/fix-the-flow-structural-navigation",
        "forks_url": "https://api.github.com/repos/fdnd-task/fix-the-flow-structural-navigation/forks",
        "keys_url": "https://api.github.com/repos/fdnd-task/fix-the-flow-structural-navigation/keys{/key_id}",
        "collaborators_url": "https://api.github.com/repos/fdnd-task/fix-the-flow-structural-navigation/collaborators{/collaborator}",
        "teams_url": "https://api.github.com/repos/fdnd-task/fix-the-flow-structural-navigation/teams",
        "hooks_url": "https://api.github.com/repos/fdnd-task/fix-the-flow-structural-navigation/hooks",
        "issue_events_url": "https://api.github.com/repos/fdnd-task/fix-the-flow-structural-navigation/issues/events{/number}",
        "events_url": "https://api.github.com/repos/fdnd-task/fix-the-flow-structural-navigation/events",
        "assignees_url": "https://api.github.com/repos/fdnd-task/fix-the-flow-structural-navigation/assignees{/user}",
        "branches_url": "https://api.github.com/repos/fdnd-task/fix-the-flow-structural-navigation/branches{/branch}",
        "tags_url": "https://api.github.com/repos/fdnd-task/fix-the-flow-structural-navigation/tags",
        "blobs_url": "https://api.github.com/repos/fdnd-task/fix-the-flow-structural-navigation/git/blobs{/sha}",
        "git_tags_url": "https://api.github.com/repos/fdnd-task/fix-the-flow-structural-navigation/git/tags{/sha}",
        "git_refs_url": "https://api.github.com/repos/fdnd-task/fix-the-flow-structural-navigation/git/refs{/sha}",
        "trees_url": "https://api.github.com/repos/fdnd-task/fix-the-flow-structural-navigation/git/trees{/sha}",
        "statuses_url": "https://api.github.com/repos/fdnd-task/fix-the-flow-structural-navigation/statuses/{sha}",
        "languages_url": "https://api.github.com/repos/fdnd-task/fix-the-flow-structural-navigation/languages",
        "stargazers_url": "https://api.github.com/repos/fdnd-task/fix-the-flow-structural-navigation/stargazers",
        "contributors_url": "https://api.github.com/repos/fdnd-task/fix-the-flow-structural-navigation/contributors",
        "subscribers_url": "https://api.github.com/repos/fdnd-task/fix-the-flow-structural-navigation/subscribers",
        "subscription_url": "https://api.github.com/repos/fdnd-task/fix-the-flow-structural-navigation/subscription",
        "commits_url": "https://api.github.com/repos/fdnd-task/fix-the-flow-structural-navigation/commits{/sha}",
        "git_commits_url": "https://api.github.com/repos/fdnd-task/fix-the-flow-structural-navigation/git/commits{/sha}",
        "comments_url": "https://api.github.com/repos/fdnd-task/fix-the-flow-structural-navigation/comments{/number}",
        "issue_comment_url": "https://api.github.com/repos/fdnd-task/fix-the-flow-structural-navigation/issues/comments{/number}",
        "contents_url": "https://api.github.com/repos/fdnd-task/fix-the-flow-structural-navigation/contents/{+path}",
        "compare_url": "https://api.github.com/repos/fdnd-task/fix-the-flow-structural-navigation/compare/{base}...{head}",
        "merges_url": "https://api.github.com/repos/fdnd-task/fix-the-flow-structural-navigation/merges",
        "archive_url": "https://api.github.com/repos/fdnd-task/fix-the-flow-structural-navigation/{archive_format}{/ref}",
        "downloads_url": "https://api.github.com/repos/fdnd-task/fix-the-flow-structural-navigation/downloads",
        "issues_url": "https://api.github.com/repos/fdnd-task/fix-the-flow-structural-navigation/issues{/number}",
        "pulls_url": "https://api.github.com/repos/fdnd-task/fix-the-flow-structural-navigation/pulls{/number}",
        "milestones_url": "https://api.github.com/repos/fdnd-task/fix-the-flow-structural-navigation/milestones{/number}",
        "notifications_url": "https://api.github.com/repos/fdnd-task/fix-the-flow-structural-navigation/notifications{?since,all,participating}",
        "labels_url": "https://api.github.com/repos/fdnd-task/fix-the-flow-structural-navigation/labels{/name}",
        "releases_url": "https://api.github.com/repos/fdnd-task/fix-the-flow-structural-navigation/releases{/id}",
        "deployments_url": "https://api.github.com/repos/fdnd-task/fix-the-flow-structural-navigation/deployments",
        "created_at": "2021-12-14T13:25:32Z",
        "updated_at": "2021-12-17T09:03:16Z",
        "pushed_at": "2021-12-17T09:03:13Z",
        "git_url": "git://github.com/fdnd-task/fix-the-flow-structural-navigation.git",
        "ssh_url": "git@github.com:fdnd-task/fix-the-flow-structural-navigation.git",
        "clone_url": "https://github.com/fdnd-task/fix-the-flow-structural-navigation.git",
        "svn_url": "https://github.com/fdnd-task/fix-the-flow-structural-navigation",
        "homepage": "",
        "size": 36,
        "stargazers_count": 0,
        "watchers_count": 0,
        "language": null,
        "has_issues": true,
        "has_projects": false,
        "has_downloads": true,
        "has_wiki": true,
        "has_pages": false,
        "forks_count": 2,
        "mirror_url": null,
        "archived": false,
        "disabled": false,
        "open_issues_count": 0,
        "license": {
            "key": "gpl-3.0",
            "name": "GNU General Public License v3.0",
            "spdx_id": "GPL-3.0",
            "url": "https://api.github.com/licenses/gpl-3.0",
            "node_id": "MDc6TGljZW5zZTk="
        },
        "allow_forking": true,
        "is_template": false,
        "topics": [
            "duplicate",
            "fix-the-flow",
            "sprint-5",
            "static-web",
            "subtask"
        ],
        "visibility": "public",
        "forks": 2,
        "open_issues": 0,
        "watchers": 0,
        "default_branch": "main",
        "permissions": {
            "admin": false,
            "maintain": false,
            "push": false,
            "triage": false,
            "pull": true
        }
    }
  ```
  </details>
