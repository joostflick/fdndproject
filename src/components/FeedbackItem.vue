<template>
  <div class="feedbackitem">
    <div :class="'tile ' + this.feedback.role">
      <h1>{{ this.feedback.author }}</h1>
      <p>{{ this.feedback.dateCreated }}</p>
      <p>{{ this.feedback.content }}</p>
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
.tile {
  margin: 10px;
  padding: 10px;
  background-color: #050840;
  color: white;
  min-height: 10em;
  max-width: 50vw;
  min-width: 300px;
  border-radius: 2rem;
}

.teacher {
  background-color: #42b983;
}

.opdrachtgever {
  border-style: solid;
}

.student {
  background-color: #c4f5dd;
  color: #050840;
}

</style>