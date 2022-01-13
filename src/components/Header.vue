<template>
  <div class="header">
    <div class="logos">
      <h2 class="squared">fdnd</h2>
      <h2 class="circled">Overzichtspagina</h2>
    </div>
    <div class="dropdown circled">
      <button>Selecteer sprint</button>
      <div class="dropdown-content">
        <div v-for="sprint in this.$attrs.sprints" :key="sprint.number">
          <router-link :to="{
          path: '/sprint/' + sprint.number,
          query: {
            sprint: sprint
          }
        }">{{ sprint.number }} - {{ sprint.name }}</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {
    data: []
  }
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
  button {
    border: none;
    background-color: transparent;
    color: #7ce7c9;
    font-size: 1em;
  }
  .dropdown {
    display: inline-block;
    position: relative;
  }
  .dropdown-content {
    display: none;
    position: absolute;
    left: 0.7em;
    top: 2.1em;
    width: 90%;
    overflow: auto;
    background-color: #7ce7c9;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  }
  .dropdown-content a {
    display: block;
    color: #000000;
    padding: 5px;
    text-decoration: none;
  }
  .dropdown-content a:hover {
    color: #FFFFFF;
    background-color: #050840;
  }
  .dropdown:hover .dropdown-content {
    display: block;
  }
</style>