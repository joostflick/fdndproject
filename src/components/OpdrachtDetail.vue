<template>
  <div class="tile">
    <h2>{{ this.repo.full_name }}</h2>
    <p>{{ this.repo.description }}</p>
    <a :href="this.repo.html_url">Bekijk op github</a>
  </div>
</template>

<script>
export default {
  name: "OpdrachtDetail",
  methods: {
  },
  data() {
    return {
      id: this.$route.params.id,
      repo: {}
    }
  },
  mounted: function() {
    fetch('https://api.github.com/repositories/' + this.id)
        .then(res => res.json())
        .then(json => {
          this.repo = json
        })
  }
}
</script>

<style scoped>
  .tile {
    margin: 10px;
    padding: 10px;
    background-color: rgba(128, 128, 128, 0.71);
    min-height: 10em;
    max-width: 50vw;
    min-width: 300px;
  }

</style>