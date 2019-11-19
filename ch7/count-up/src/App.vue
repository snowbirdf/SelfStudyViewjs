<template>
  <div id="app">
    <p>カウント:{{count}}</p>
    <button @click="increment">countup</button>
    <label>{{example}}</label>
    <button @click="update">update example</button>
  </div>
</template>

<script>
export default {
  computed: {
    count() {
      return this.$store.state.counter.count;
    },
    example() {
      return this.$store.state.example.value;
    }
  },
  methods: {
    increment() {
      this.$store.dispatch("incrementAction", { type: "two" });
    },
    update() {
      this.$store.commit("example/update");
    }
  }
};
</script>
