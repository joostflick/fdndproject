<template>
  <div class="discussion">
    <div class="tile">
      <p>{{this.$route.query.feedback.subject}}</p>
      <p>{{this.$route.query.feedback.author}}</p>
      <p>{{this.$route.query.feedback.dateCreated}}</p>
      <p>{{this.$route.query.feedback.role}}</p>
      <p>{{this.$route.query.feedback.content}}</p>
    </div>
    <div class="tile">
      <p>Student 1</p>
      <p>{{this.$route.query.feedback.dateCreated}}</p>
      <p>student</p>
      <p>Ik begrijp de feedback</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Discussion"
}
</script>

<style scoped>
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
  padding: 0 3em 1em 3em;
  border-radius: 2rem;
}
</style>