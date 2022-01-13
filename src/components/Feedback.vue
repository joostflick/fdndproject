<template>
  <div class="feedback">
    <div>
      <h2>Feedback</h2>
      <h3>{{ data.full_name }}</h3>
      <p>{{ data.description }}</p>
    </div>
    <div>
<div v-for="item in feedback" :key="item.id">
          <FeedbackItem :feedback="item"></FeedbackItem>
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
          role: 'teacher',
          subject: 'Debriefing',
          content: 'Dit is feedback van een docent',
          dateCreated: '10:21 09/11/2021'
        },
        {
          id: 1,
          author: 'Marc OBA',
          role: 'opdrachtgever',
          subject: 'Debriefing',
          content: 'Dit is feedback van een externe opdrachtgever',
          dateCreated: '10:21 09/11/2021'
        },
        {
          id: 2,
          author: 'Harry Barry',
          role: 'student',
          subject: 'Debriefing',
          content: 'Dit is feedback van een student',
          dateCreated: '10:21 09/11/2021'
        },
        {
          id: 3,
          author: 'Koop Reijnders',
          role: 'teacher',
          subject: 'Debriefing',
          content: 'Dit is feedback van een andere docent',
          dateCreated: '10:21 09/11/2021'
        },
        {
          id: 4,
          author: 'Marc OBA',
          role: 'opdrachtgever',
          subject: 'Debriefing',
          content: 'Dit is feedback van een externe opdrachtgever',
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
.feedback {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.feedback > div {
  background-color: #9D7BEB;
  width: 30vw;
  margin: 1em 0 1em 0;
  padding: 0 3em 1em 3em;
  border-radius: 2rem;
}
</style>