<template>
  <div id="app">
    <p>{{value}}</p>
    <button @click="increment(1)">+1</button>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  computed: mapState({ value: "count" }),
  methods: mapMutations(["increment"])
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
