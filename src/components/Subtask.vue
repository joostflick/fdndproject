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

</style>