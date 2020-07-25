<template>
  <div id="app" class="container-fluid">
    <Dashboard :indecon="indecon" />
  </div>
</template>

<script>
import Dashboard from "./components/Dashboard.vue";

export default {
  name: "App",
  components: {
    Dashboard
  },
  data() {
    return {
      indecon: {}
    };
  },
  methods: {
    getIndicadores() {
      const axios = require("axios").default;
      axios
        .get("http://localhost:8080/last")
        .then(res => {
          return res.data;
        })
        .then(data => {
          this.indecon = data;
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  created() {
    this.getIndicadores();
  }
};
</script>
