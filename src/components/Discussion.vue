<template>
  <div class="content">
    <p>Feedback over:</p>
    <h1>{{this.$route.query.feedback.subject}}</h1>
    <div class="tile">
      <div class="topbar">
        <h3>{{this.$route.query.feedback.author}}</h3>
        <p>{{this.$route.query.feedback.dateCreated}}</p>
      </div>
      <p :class="'role ' + this.$route.query.feedback.role">{{this.$route.query.feedback.role}}</p>
      <p>{{this.$route.query.feedback.content}}</p>
    </div>
    <div class="tile">
      <div class="topbar">
        <h3>Student 1</h3>
        <p>{{this.$route.query.feedback.dateCreated}}</p>
      </div>
      <p class="role Student">Student</p>
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
a {
  color: #050840;
}
.content > p {
  color: #7ce7c9;
}
.role {
  background-color: #42b983;
  border-radius: 2em;
  padding: 0.5em;
  margin: 0.2em;
  width: fit-content;
}

.Docent {
  background-color: #6F201E;
  color: white;
}

.Opdrachtgever {
  background-color: #007E61;
}

.Student {
  background-color: #958BB6;
}
</style>