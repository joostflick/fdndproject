<template>
  <div class="subtask">
    <h3>{{ subtask.title }}</h3>
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
  }
  h3 {
    margin-bottom: 0;
  }
</style>