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
h1 {
  margin-top: 0;
  margin-bottom: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #050840;
}
body {
  background-color: #050840;
}
ul {
  list-style: none;
  padding-left: 0;
}
a {
  color: #7ce7c9;
  font-size: 1.2em;
}

.navigation-item > a {
  color: #7ce7c9;
}

.circled {
  color: #7ce7c9;
  justify-self: start;
  border: 3px solid #7ce7c9;
  font-weight: 100;
  border-radius: calc(4 * 0.5rem);
  padding: 0.5rem 2rem;
  box-shadow: -0.6rem 0.3rem 0 0 #7ce7c9;
  margin-left: 1rem;
}

.squared {
  color: #7ce7c9;
  justify-self: start;
  border: 3px solid #7ce7c9;
  font-weight: 100;
  border-radius: 0.5rem;
  padding: 0.5rem 2rem;
  box-shadow: -0.6rem 0.3rem 0 0 #7ce7c9;
  margin-left: 1rem;
}

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
  h1 {
    margin-bottom: 0;
  }
  .circled, .squared {
    font-size: 1em;
  }
  .sprint > div, .projectpagina > div, .feedback > div {
    padding: 1em 1em !important;
    width: 90% !important;
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
