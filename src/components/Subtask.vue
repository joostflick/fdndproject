<template>
  <div class="subtask">
    <div class="title">
      <h3>{{ subtask.title }}</h3>
    </div>
    <p>{{ subtask.description }}</p>
  </div>
</template>

<script>
export default {
  name: "Subtask",
  props: {
    subtask: Object
  }
}
</script>

<style scoped>
  .subtask {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
  h3 {
    margin-bottom: 0.5em;
    padding: 0 1em 0 1em;
  }
  .title {
    height: 4.5em;
    background-color: rgba(0,0,0,0.1);
    border-radius: 2rem 2rem 0 0;
  }
  p {
    margin: 1em 1em 0 1em;
  }
</style>