<template>
  <div id="app">
    <router-link to="/home">FDND repos</router-link>
    <ul>
      <li v-for="sprint in sprints" :key="sprint.number">
        <router-link :to="{
          path: '/sprint/' + sprint.number,
          query: {
            sprint: sprint
          }
        }">
          Sprint {{ sprint.number }}</router-link>
      </li>
    </ul>
    <router-view :key="$route.fullPath"></router-view>
<!--    <HelloWorld msg="De FDND repos"/>-->
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      sprints: [
        {
          number: 1,
          name: 'Your Tribe',
          description: 'De opleiding FDND bestaat uit een tribe met daarin een aantal squads, in een squad zitten studenten en docenten. Het eerste semester begint met de sprint Your Tribe: presenteer jezelf en je squad met een eigen website. In deze sprint maak je kennis met je studiegenoten en de opleiding. Je leert je eigen online profielpagina maken en gaat met je Squad een gezamenlijke website maken.\n' +
              '\n' +
              'De focus in deze sprint ligt op kennismaken, samenwerken en hoe je interface en vormgevingsprincipes kan toepassen voor een responsive design.',
          gedragscriteria: [
              'Je volgt binnen projecten de aangeboden fasering van de development-lifecycle.',
              'Je past aangeboden principes en conventies op het gebied van frontend, interface design en vormgeving toe.',
              'Je werkt in teams, laat je hierbij begeleiden en geeft feedback aan teamleden.',
              'Je draagt verantwoording voor je eigen resultaten en verwerkt ontvangen feedback.',
              'Je luistert naar wat een ander zegt en neemt dit serieus.'
          ],
          onderwerpen: []
        },
        {
          number: 2,
          name: 'The Client',
          description: 'De opleiding FDND bestaat uit een tribe met daarin een aantal squads, in een squad zitten studenten en docenten. Het eerste semester begint met de sprint Your Tribe: presenteer jezelf en je squad met een eigen website. In deze sprint maak je kennis met je studiegenoten en de opleiding. Je leert je eigen online profielpagina maken en gaat met je Squad een gezamenlijke website maken.\n' +
              '\n' +
              'De focus in deze sprint ligt op kennismaken, samenwerken en hoe je interface en vormgevingsprincipes kan toepassen voor een responsive design.',
          gedragscriteria: [
            'Je volgt binnen projecten de aangeboden fasering van de development-lifecycle.',
            'Je past aangeboden principes en conventies op het gebied van frontend, interface design en vormgeving toe.',
            'Je werkt in teams, laat je hierbij begeleiden en geeft feedback aan teamleden.',
            'Je draagt verantwoording voor je eigen resultaten en verwerkt ontvangen feedback.',
            'Je luistert naar wat een ander zegt en neemt dit serieus.'
          ],
          onderwerpen: []
        },
        {
          number: 3,
          name: 'All Human',
          description: 'De opleiding FDND bestaat uit een tribe met daarin een aantal squads, in een squad zitten studenten en docenten. Het eerste semester begint met de sprint Your Tribe: presenteer jezelf en je squad met een eigen website. In deze sprint maak je kennis met je studiegenoten en de opleiding. Je leert je eigen online profielpagina maken en gaat met je Squad een gezamenlijke website maken.\n' +
              '\n' +
              'De focus in deze sprint ligt op kennismaken, samenwerken en hoe je interface en vormgevingsprincipes kan toepassen voor een responsive design.',
          gedragscriteria: [
            'Je volgt binnen projecten de aangeboden fasering van de development-lifecycle.',
            'Je past aangeboden principes en conventies op het gebied van frontend, interface design en vormgeving toe.',
            'Je werkt in teams, laat je hierbij begeleiden en geeft feedback aan teamleden.',
            'Je draagt verantwoording voor je eigen resultaten en verwerkt ontvangen feedback.',
            'Je luistert naar wat een ander zegt en neemt dit serieus.'
          ],
          onderwerpen: []
        },
        {
          number: 4,
          name: 'The Campaign',
          description: 'De opleiding FDND bestaat uit een tribe met daarin een aantal squads, in een squad zitten studenten en docenten. Het eerste semester begint met de sprint Your Tribe: presenteer jezelf en je squad met een eigen website. In deze sprint maak je kennis met je studiegenoten en de opleiding. Je leert je eigen online profielpagina maken en gaat met je Squad een gezamenlijke website maken.\n' +
              '\n' +
              'De focus in deze sprint ligt op kennismaken, samenwerken en hoe je interface en vormgevingsprincipes kan toepassen voor een responsive design.',
          gedragscriteria: [
            'Je volgt binnen projecten de aangeboden fasering van de development-lifecycle.',
            'Je past aangeboden principes en conventies op het gebied van frontend, interface design en vormgeving toe.',
            'Je werkt in teams, laat je hierbij begeleiden en geeft feedback aan teamleden.',
            'Je draagt verantwoording voor je eigen resultaten en verwerkt ontvangen feedback.',
            'Je luistert naar wat een ander zegt en neemt dit serieus.'
          ],
          onderwerpen: []
        },
        {
          number: 5,
          name: 'Fix the Flow',
          description: 'De opleiding FDND bestaat uit een tribe met daarin een aantal squads, in een squad zitten studenten en docenten. Het eerste semester begint met de sprint Your Tribe: presenteer jezelf en je squad met een eigen website. In deze sprint maak je kennis met je studiegenoten en de opleiding. Je leert je eigen online profielpagina maken en gaat met je Squad een gezamenlijke website maken.\n' +
              '\n' +
              'De focus in deze sprint ligt op kennismaken, samenwerken en hoe je interface en vormgevingsprincipes kan toepassen voor een responsive design.',
          gedragscriteria: [
            'Je volgt binnen projecten de aangeboden fasering van de development-lifecycle.',
            'Je past aangeboden principes en conventies op het gebied van frontend, interface design en vormgeving toe.',
            'Je werkt in teams, laat je hierbij begeleiden en geeft feedback aan teamleden.',
            'Je draagt verantwoording voor je eigen resultaten en verwerkt ontvangen feedback.',
            'Je luistert naar wat een ander zegt en neemt dit serieus.'
          ],
          onderwerpen: []
        },
        {
          number: 6,
          name: 'The Startup',
          description: 'De opleiding FDND bestaat uit een tribe met daarin een aantal squads, in een squad zitten studenten en docenten. Het eerste semester begint met de sprint Your Tribe: presenteer jezelf en je squad met een eigen website. In deze sprint maak je kennis met je studiegenoten en de opleiding. Je leert je eigen online profielpagina maken en gaat met je Squad een gezamenlijke website maken.\n' +
              '\n' +
              'De focus in deze sprint ligt op kennismaken, samenwerken en hoe je interface en vormgevingsprincipes kan toepassen voor een responsive design.',
          gedragscriteria: [
            'Je volgt binnen projecten de aangeboden fasering van de development-lifecycle.',
            'Je past aangeboden principes en conventies op het gebied van frontend, interface design en vormgeving toe.',
            'Je werkt in teams, laat je hierbij begeleiden en geeft feedback aan teamleden.',
            'Je draagt verantwoording voor je eigen resultaten en verwerkt ontvangen feedback.',
            'Je luistert naar wat een ander zegt en neemt dit serieus.'
          ],
          onderwerpen: []
        }
      ]
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
body {
  background-color: #050840;
}
</style>
