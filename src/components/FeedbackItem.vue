<template>
  <div class="feedbackitem">
    <div :class="'tile ' + this.feedback.role">
      <div class="topbar">
        <h2>{{ this.feedback.author }}</h2>
        <p>{{ this.feedback.dateCreated }}</p>
      </div>
      <p class="role">{{ this.feedback.role }}</p>
      <p> <b> Onderwerp: {{ this.feedback.subject }} </b></p>
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
h2 {
  margin-bottom: 0;
}
.topbar > p {
  margin-bottom: 0;
}
.feedbackitem {
  height: 85%;
}
.tile {
  margin: 10px;
  padding: 15px;
  background-color: var(--lavender);
  /*color: white;*/
  height: 100%;
  width: 320px;
  border-radius: 2rem;
}

.tile > a {
  color: #050840;
}

.Docent > .role {
  background-color: #6F201E;
  color: white;
}

.Opdrachtgever > .role {
  background-color: #007E61;
}

.Student > .role {
  background-color: #958BB6;
}

.role {
  border-radius: 2em;
  min-width: 3em;
  padding: 0.6em;
  margin: 0.2em;
}

</style>