import Vue from 'vue/dist/vue.js'
import VueRouter from "vue-router"
import App from './App.vue'
import Overzicht from "@/components/Overzicht"
import Projectpagina from "@/components/Projectpagina"
import Sprint from "@/components/Sprint";
import Feedback from "@/components/Feedback";
import PageNotFound from "@/components/PageNotFound"
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCodeBranch } from '@fortawesome/free-solid-svg-icons'
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import Discussion from "@/components/Discussion";
import MarkDownItVue from "markdown-it-vue";

Vue.component('markdown-it-vue', MarkDownItVue)

library.add(faCodeBranch, faArrowDown, faExternalLinkAlt, faStar, faArrowUp, faChevronLeft)


Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

Vue.use(VueRouter)

const routes = [
    { path: '/', redirect: '/home/' },
    { path: '/home', component: Overzicht },
    { path: '/projectpagina/:id', component: Projectpagina },
    { path: '/sprint/:sprintNr', component: Sprint },
    { path: '/feedback/:id', component: Feedback},
    { path: '/discussion/:id', component: Discussion},
    { path: "*", component: PageNotFound }
]

const router = new VueRouter({
    routes // short for `routes: routes`
})


new Vue({
  render: h => h(App), router
}).$mount('#app')

// // Get User
// async function getUser(userUrl){
//   const response = await fetch(userUrl);
//   return await response.json();
// }
//
// // Get user information
// getUser('https://api.github.com/users/defunkt').then(function(result) {
//   console.log("Name: " + result.name)
//   console.log("bio: " + result.bio)
//   console.log("followers: " + result.followers)
//   console.log("link: " + result.url)
// })

// Get GH user
// function getGHUser(username) {
//   let retrievedUser = {};
//   fetch('https://api.github.com/users/' + username)
//       .then(res => res.json())
//       .then(json => {
//         console.log(json)
//         retrievedUser.id = json.id;
//         retrievedUser.name = json.name;
//         retrievedUser.bio = json.bio;
//       })
//   return retrievedUser;
// }

// Get organisation
// function getGHTeam(team) {
//     let result = {};
//     fetch('https://api.github.com/orgs/' + team)
//         .then(res => res.json())
//         .then(json => {
//             console.log(json)
//             result.id = json.id;
//             result.name = json.name;
//             result.bio = json.description;
//             result.reposUrl = json.repos_url;
//         })
//     return result;
// }

// function getGHRepos(team) {
//     let result = {};
//     fetch('https://api.github.com/orgs/' + team + '/repos')
//         .then(res => res.json())
//         .then(json => {
//             console.log(json)
//             result.id = json.id;
//             result.name = json.name;
//             result.bio = json.description;
//             result.reposUrl = json.repos_url;
//         })
//     return result;
// }





//
// console.log(getGHUser('joostflick'))
// console.log(getGHTeam('fdnd-task'))
// console.log(getGHRepos('fdnd-task'))