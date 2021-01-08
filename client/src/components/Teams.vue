<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <ul>
      <li v-for="team in teams" v-bind:key="team">
        {{ team.name }} <a href="">View Team</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Teams",
  props: {
    msg: String,
    teams: Array,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin: 20px 10px;
  border: 1px solid grey;
  width: 300px;
}
a {
  color: #42b983;
}
</style>
