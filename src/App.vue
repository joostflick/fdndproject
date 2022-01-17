<template>
  <div id="app">
    <Header></Header>
    <transition name="fade">
      <router-view :key="$route.fullPath"></router-view>
    </transition>
  </div>
</template>

<script>
import Header from "@/components/Header";

export default {
  name: 'App',
  components: {
    Header
  },
  data() {
    return {
      // sprints: [
      //   {
      //     number: 1,
      //     name: 'Your Tribe',
      //     description: 'De opleiding FDND bestaat uit een tribe met daarin een aantal squads, in een squad zitten studenten en docenten. Het eerste semester begint met de sprint Your Tribe: presenteer jezelf en je squad met een eigen website. In deze sprint maak je kennis met je studiegenoten en de opleiding. Je leert je eigen online profielpagina maken en gaat met je Squad een gezamenlijke website maken.\n' +
      //         '\n' +
      //         'De focus in deze sprint ligt op kennismaken, samenwerken en hoe je interface en vormgevingsprincipes kan toepassen voor een responsive design.',
      //     gedragscriteria: [
      //       {id: 0, title: 'Development lifecycle', description: 'Je volgt binnen projecten de aangeboden fasering van de development-lifecycle.'},
      //       {id: 1, title: 'Principes & conventies', description: 'Je past aangeboden principes en conventies op het gebied van frontend, interface design en vormgeving toe.'},
      //       {id: 2, title: 'Teams', description: 'Je werkt in teams, laat je hierbij begeleiden en geeft feedback aan teamleden.'},
      //       {id: 3, title: 'Verantwoording', description: 'Je draagt verantwoording voor je eigen resultaten en verwerkt ontvangen feedback.'},
      //       {id: 4, title: 'Houding', description: 'Je luistert naar wat een ander zegt en neemt dit serieus.'}
      //     ],
      //     onderwerpen: []
      //   },
      //   {
      //     number: 2,
      //     name: 'The Client',
      //     description: 'De opleiding FDND bestaat uit een tribe met daarin een aantal squads, in een squad zitten studenten en docenten. Het eerste semester begint met de sprint Your Tribe: presenteer jezelf en je squad met een eigen website. In deze sprint maak je kennis met je studiegenoten en de opleiding. Je leert je eigen online profielpagina maken en gaat met je Squad een gezamenlijke website maken.\n' +
      //         '\n' +
      //         'De focus in deze sprint ligt op kennismaken, samenwerken en hoe je interface en vormgevingsprincipes kan toepassen voor een responsive design.',
      //     gedragscriteria: [
      //       {id: 0, title: 'Development lifecycle', description: 'Je volgt binnen projecten de aangeboden fasering van de development-lifecycle.'},
      //       {id: 1, title: 'Principes & conventies', description: 'Je past aangeboden principes en conventies op het gebied van frontend, interface design en vormgeving toe.'},
      //       {id: 2, title: 'Teams', description: 'Je werkt in teams, laat je hierbij begeleiden en geeft feedback aan teamleden.'},
      //       {id: 3, title: 'Verantwoording', description: 'Je draagt verantwoording voor je eigen resultaten en verwerkt ontvangen feedback.'},
      //       {id: 4, title: 'Houding', description: 'Je luistert naar wat een ander zegt en neemt dit serieus.'}
      //     ],
      //     onderwerpen: []
      //   },
      //   {
      //     number: 3,
      //     name: 'All Human',
      //     description: 'De opleiding FDND bestaat uit een tribe met daarin een aantal squads, in een squad zitten studenten en docenten. Het eerste semester begint met de sprint Your Tribe: presenteer jezelf en je squad met een eigen website. In deze sprint maak je kennis met je studiegenoten en de opleiding. Je leert je eigen online profielpagina maken en gaat met je Squad een gezamenlijke website maken.\n' +
      //         '\n' +
      //         'De focus in deze sprint ligt op kennismaken, samenwerken en hoe je interface en vormgevingsprincipes kan toepassen voor een responsive design.',
      //     gedragscriteria: [
      //       {id: 0, title: 'Development lifecycle', description: 'Je volgt binnen projecten de aangeboden fasering van de development-lifecycle.'},
      //       {id: 1, title: 'Principes & conventies', description: 'Je past aangeboden principes en conventies op het gebied van frontend, interface design en vormgeving toe.'},
      //       {id: 2, title: 'Teams', description: 'Je werkt in teams, laat je hierbij begeleiden en geeft feedback aan teamleden.'},
      //       {id: 3, title: 'Verantwoording', description: 'Je draagt verantwoording voor je eigen resultaten en verwerkt ontvangen feedback.'},
      //       {id: 4, title: 'Houding', description: 'Je luistert naar wat een ander zegt en neemt dit serieus.'}
      //     ],
      //     onderwerpen: []
      //   },
      //   {
      //     number: 4,
      //     name: 'The Campaign',
      //     description: 'De opleiding FDND bestaat uit een tribe met daarin een aantal squads, in een squad zitten studenten en docenten. Het eerste semester begint met de sprint Your Tribe: presenteer jezelf en je squad met een eigen website. In deze sprint maak je kennis met je studiegenoten en de opleiding. Je leert je eigen online profielpagina maken en gaat met je Squad een gezamenlijke website maken.\n' +
      //         '\n' +
      //         'De focus in deze sprint ligt op kennismaken, samenwerken en hoe je interface en vormgevingsprincipes kan toepassen voor een responsive design.',
      //     gedragscriteria: [
      //       {id: 0, title: 'Development lifecycle', description: 'Je volgt binnen projecten de aangeboden fasering van de development-lifecycle.'},
      //       {id: 1, title: 'Principes & conventies', description: 'Je past aangeboden principes en conventies op het gebied van frontend, interface design en vormgeving toe.'},
      //       {id: 2, title: 'Teams', description: 'Je werkt in teams, laat je hierbij begeleiden en geeft feedback aan teamleden.'},
      //       {id: 3, title: 'Verantwoording', description: 'Je draagt verantwoording voor je eigen resultaten en verwerkt ontvangen feedback.'},
      //       {id: 4, title: 'Houding', description: 'Je luistert naar wat een ander zegt en neemt dit serieus.'}
      //     ],
      //     onderwerpen: []
      //   },
      //   {
      //     number: 5,
      //     name: 'Fix the Flow',
      //     description: 'De opleiding FDND bestaat uit een tribe met daarin een aantal squads, in een squad zitten studenten en docenten. Het eerste semester begint met de sprint Your Tribe: presenteer jezelf en je squad met een eigen website. In deze sprint maak je kennis met je studiegenoten en de opleiding. Je leert je eigen online profielpagina maken en gaat met je Squad een gezamenlijke website maken.\n' +
      //         '\n' +
      //         'De focus in deze sprint ligt op kennismaken, samenwerken en hoe je interface en vormgevingsprincipes kan toepassen voor een responsive design.',
      //     gedragscriteria: [
      //       {id: 0, title: 'Development lifecycle', description: 'Je volgt binnen projecten de aangeboden fasering van de development-lifecycle.'},
      //       {id: 1, title: 'Principes & conventies', description: 'Je past aangeboden principes en conventies op het gebied van frontend, interface design en vormgeving toe.'},
      //       {id: 2, title: 'Teams', description: 'Je werkt in teams, laat je hierbij begeleiden en geeft feedback aan teamleden.'},
      //       {id: 3, title: 'Verantwoording', description: 'Je draagt verantwoording voor je eigen resultaten en verwerkt ontvangen feedback.'},
      //       {id: 4, title: 'Houding', description: 'Je luistert naar wat een ander zegt en neemt dit serieus.'}
      //     ],
      //     onderwerpen: []
      //   },
      //   {
      //     number: 6,
      //     name: 'The Startup',
      //     description: 'De opleiding FDND bestaat uit een tribe met daarin een aantal squads, in een squad zitten studenten en docenten. Het eerste semester begint met de sprint Your Tribe: presenteer jezelf en je squad met een eigen website. In deze sprint maak je kennis met je studiegenoten en de opleiding. Je leert je eigen online profielpagina maken en gaat met je Squad een gezamenlijke website maken.\n' +
      //         '\n' +
      //         'De focus in deze sprint ligt op kennismaken, samenwerken en hoe je interface en vormgevingsprincipes kan toepassen voor een responsive design.',
      //     gedragscriteria: [
      //       {id: 0, title: 'Development lifecycle', description: 'Je volgt binnen projecten de aangeboden fasering van de development-lifecycle.'},
      //       {id: 1, title: 'Principes & conventies', description: 'Je past aangeboden principes en conventies op het gebied van frontend, interface design en vormgeving toe.'},
      //       {id: 2, title: 'Teams', description: 'Je werkt in teams, laat je hierbij begeleiden en geeft feedback aan teamleden.'},
      //       {id: 3, title: 'Verantwoording', description: 'Je draagt verantwoording voor je eigen resultaten en verwerkt ontvangen feedback.'},
      //       {id: 4, title: 'Houding', description: 'Je luistert naar wat een ander zegt en neemt dit serieus.'}
      //     ],
      //     onderwerpen: []
      //   }
      // ]
    }
  },
}
</script>

<style>
/*Defining the main colors*/
:root {
  --blueberry: #050542;
  --turqouise: #66e5bf;
  --lavender: #a675f5;
}
/*Background color*/
body {
  background-color: var(--blueberry);
}
/*Remove default list styling*/
ul {
  list-style: none;
  padding-left: 0;
}
/*Setting font & default color*/
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--blueberry);
}
h1 {
  margin-top: 1em;
  margin-bottom: 0;
  color: white;
}
/*Styling of the root element of the different screens*/
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
}
/*Styling the toplevel elements*/
.content > div {
  background-color: var(--turqouise);
  width: 60vw;
  margin: 1em 0 1em 0;
  padding: 1em 4em;
  border-radius: 2rem;
}
.tile a {
  color: white;
}
/*Center the different repos & assignments*/
.content .items {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 0;
}
/*Headers for the tiles*/
.content > div > h3, .topbar > h3 {
  font-size: 1.5em;
}
/*Topbar for elements with title + searchbar*/
.topbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
/*Style links*/
a {
  color: var(--blueberry);
  font-size: 1em;
}
/*Circled items*/
.circled {
  color: var(--turqouise);
  justify-self: start;
  border: 3px solid var(--turqouise);
  font-weight: 100;
  border-radius: calc(4 * 0.5rem);
  padding: 0.5rem 2rem;
  box-shadow: -0.6rem 0.3rem 0 0 var(--turqouise);
  margin-left: 1rem;
}
button {
  font-size: 1.25em;
  border: none;
  background-color: transparent;
  color: var(--turqouise);
}
/*Squared items*/
.squared {
  color: var(--turqouise);
  justify-self: start;
  border: 3px solid var(--turqouise);
  font-weight: 100;
  border-radius: 0.5rem;
  padding: 0.5rem 2rem;
  box-shadow: -0.6rem 0.3rem 0 0 var(--turqouise);
  margin-left: 1rem;
}
/*Styling inputs*/
.input {
  color: #050840;
  border: 3px solid #050840;
  border-radius: calc(4 * 0.5rem);
  padding: 0.5rem 2rem;
  background-color: transparent;
  font-size: 1rem;
}
.input::placeholder {
  color: #050840;
  font-size: 1rem;
}

.markdown-body img {
  max-width: 60vw;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .2s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

@media only screen and (max-width: 630px) {
  .topbar {
    display: initial !important;
  }
  .header {
    flex-direction: column;
  }
  .tablinks {
    border-radius: 2rem !important;
  }
  .tabs > button {
    margin-bottom: 0.5rem;
  }
  h1 {
    margin-bottom: 0;
  }
  .circled, .squared {
    font-size: 1em;
  }
  .content > div {
    padding: 1em 1em !important;
    width: 90% !important;
  }
  .markdown-body img {
    max-width: 90% !important;
  }
  .tile {
    width: 75vw !important;
    padding: 15px !important;
  }
  ul {
    padding-left: 0;
  }
}
</style>
