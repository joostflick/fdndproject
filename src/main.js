import Vue from 'vue/dist/vue.js'
import VueRouter from "vue-router"
import App from './App.vue'
import Overzicht from "@/components/Overzicht"
import OpdrachtDetail from "@/components/OpdrachtDetail"
import Sprint from "@/components/Sprint";
// import fetch from "node-fetch";

Vue.config.productionTip = false

Vue.use(VueRouter)

const routes = [
    { path: '/home', component: Overzicht },
    { path: '/projectpagina/:id', component: OpdrachtDetail },
    { path: '/sprint/:sprint', component: Sprint }
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