<template>
  <div class="feedbackitem">
    <div :class="'tile ' + this.feedback.role">
      <h2>{{ this.feedback.author }}</h2>
      <p>Feedback op: {{ this.feedback.subject }}</p>
      <p>{{ this.feedback.dateCreated }}</p>
      <p>{{ this.feedback.content }}</p>
      <router-link :to="{
          path: '/discussion/' + this.feedback.id,
          query: {
            feedback: this.feedback
          }
        }">Bekijk discussie</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "FeedbackItem",
  props: {
    feedback: Object
  }
}
</script>

<style scoped>
.feedbackitem {
  height: 85%;
}
.tile {
  margin: 10px;
  padding: 10px;
  background-color: #050840;
  /*color: white;*/
  height: 100%;
  width: 300px;
  border-radius: 2rem;
}

.tile > a {
  color: #050840;
}

.teacher {
  background-color: #42b983;
  border-style: dotted;
}

.opdrachtgever {
  background-color: #42b983;
  border-style: solid;
}

.student {
  background-color: #42b983;
}

</style>