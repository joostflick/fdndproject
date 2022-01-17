<template>
  <div class="content">
    <h1>Feedback</h1>
    <div>
          <h3>Student: </h3>
        <p>{{ data.owner.login }}</p>
      <h3>Repo:</h3>
      <p>{{ data.name }}</p>
      <a :href="data.html_url" target="_blank">Bekijk deze opdracht op github  <font-awesome-icon icon="external-link-alt" /></a>
      <h3>Omschrijving:</h3>
      <p>{{ data.description }}</p>
    </div>
    <div>
      <h3>Feedback items</h3>
      <div class="feedback-items">
        <div v-for="item in feedback" :key="item.id">
          <FeedbackItem :feedback="item"></FeedbackItem>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FeedbackItem from "@/components/FeedbackItem";
export default {
  name: "Feedback",
  components: {
    FeedbackItem
  },
  props: {
    data: Object
  },
  data() {
    return {
      feedback: [
        {
          id: 0,
          author: 'Joost de Faber',
          role: 'Docent',
          subject: 'Debriefing',
          content: 'Misschien kun je bij de debriefing nog even kijken welke onderwerpen de opdrachtgever heeft aangegeven het belangrijkste te vinden.',
          dateCreated: '10:21 09/11/2021'
        },
        {
          id: 1,
          author: 'Marc OBA',
          role: 'Opdrachtgever',
          subject: 'Read-me',
          content: 'Zou je de read me nog aan kunnen vullen? Ik kan momenteel de inhoud niet zien',
          dateCreated: '10:21 09/11/2021'
        },
        {
          id: 2,
          author: 'Joost Flick',
          role: 'Student',
          subject: 'index.html',
          content: 'Zou ik dit stukje code over mogen nemen van je?',
          dateCreated: '10:21 09/11/2021'
        },
        {
          id: 3,
          author: 'Koop Reijnders',
          role: 'Docent',
          subject: 'Oplevering',
          content: 'Ziet er goed uit, maar er missen nog een aantal dingen in je oplevering',
          dateCreated: '10:21 09/11/2021'
        }
      ]
    }
  },
  mounted: function() {
    fetch('https://api.github.com/repositories/' + this.$route.params.id)
        .then(res => res.json())
        .then(json => {
          this.data = json
        })
  }
}
</script>

<style scoped>
.feedback-items {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>