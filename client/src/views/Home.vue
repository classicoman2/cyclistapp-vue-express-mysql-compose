<template>
  <div class="home">
    <Teams msg="Cycling Teams (2021)" v-bind:teams="teams" />
    <button
      id="loadTeamsButton"
      v-on:click="loadDataFromJSONFile"
      v-if="dbIsEmpty == false"
    >
      Load Data from Procyclingstats
    </button>
  </div>
</template>

<script>
// @ is an alias to /src
import Teams from "@/components/Teams.vue";

export default {
  name: "Home",
  components: {
    Teams,
  },
  data: function () {
    return {
      //xtoni
      teams: ["equip 1", "equip 2"],
      //xtoni - si no hi ha dades de l'equip (teams.length == 0) en clicar, carrega dades del JSON
      dbIsEmpty: false,
    };
  },
  methods: {
    /**
     * Loads data form JSON file and inserts it into the Database
     * xtoni (pending )
     */
    loadDataFromJSONFile() {
      console.log("foo");
    },
  },
  mounted() {},
};
</script>
