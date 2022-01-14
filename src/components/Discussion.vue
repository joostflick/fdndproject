<template>
  <div class="discussion">
    <p>Feedback over:</p>
    <h1>{{this.$route.query.feedback.subject}}</h1>
    <div class="tile">
      <div class="top-bar">
        <h3>{{this.$route.query.feedback.author}}</h3>
        <p>{{this.$route.query.feedback.dateCreated}}</p>
      </div>
      <p :class="'role ' + this.$route.query.feedback.role">{{this.$route.query.feedback.role}}</p>
      <p>{{this.$route.query.feedback.content}}</p>
    </div>
    <div class="tile">
      <div class="top-bar">
        <h3>Student 1</h3>
        <p>{{this.$route.query.feedback.dateCreated}}</p>
      </div>
      <p class="role">student</p>
      <p>Ga ik doen, ik zal een berichtje sturen wanneer de verandering doorgevoerd is</p>
    </div>
    <div class="tile">
      <a href="#"  onclick="return false;">Reageer op deze discussie op github <font-awesome-icon icon="external-link-alt" /></a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Discussion"
}
</script>

<style scoped>
.top-bar {
  display: flex;
  justify-content: space-between;
}
a {
  color: #050840;
}
.discussion > p {
  color: #7ce7c9;
}
h1 {
  color: #7ce7c9;
}
.discussion {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.discussion > div {
  background-color: #9D7BEB;
  width: 30vw;
  margin: 1em 0 1em 0;
  padding: 1em 3em 1em 3em;
  border-radius: 2rem;
}
.role {
  background-color: #42b983;
  border-radius: 2em;
  padding: 0.5em;
  margin: 0.2em;
  width: fit-content;
}
.tile {
  text-align: left;
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