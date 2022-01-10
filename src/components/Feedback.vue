<template>
  <div class="feedback">
    <div>
      <h2>Feedback</h2>
      <h3>{{ data.full_name }}</h3>
      <p>{{ data.description }}</p>
    </div>
    <div>
      <ul>
        <li v-for="item in feedback" :key="item.id">
          <FeedbackItem :feedback="item"></FeedbackItem>
        </li>
      </ul>
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
          content: 'Dit is feedback van een docent'
        },
        {
          id: 1,
          author: 'Marc OBA',
          role: 'opdrachtgever',
          content: 'Dit is feedback van een externe opdrachtgever'
        },
        {
          id: 2,
          author: 'Harry Barry',
          role: 'student',
          content: 'Dit is feedback van een student'
        },
        {
          id: 3,
          author: 'Koop Reijnders',
          role: 'teacher',
          content: 'Dit is feedback van een andere docent'
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
  width: 60vw;
  margin: 1em 0 1em 0;
  padding: 0 4em 1em 2em;
  border-radius: 2rem;
}
</style>