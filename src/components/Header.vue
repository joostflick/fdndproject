<template>
  <div class="header">
    <div class="logos">
      <h2 class="squared">fdnd</h2>
      <h2 class="circled">Overzichtspagina</h2>
    </div>
    <div class="search">
      <input     v-bind="$attrs"
                 v-bind:value="value"
                 v-on:input="$emit('input', $event.target.value)" class="input" type="text" placeholder="Zoeken.." >
    </div>
  </div>
</template>

<script>
export default {
  name: "Header"
}
</script>
<style scoped>
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .logos {
    display: flex;
  }
</style>