<template>
  <div id="container">
    <h1>Root</h1>
    <div id="grid">
      <Left1 />
      <Right1 />
    </div>
  </div>
</template>

<script setup>
import Left1 from "./components/Left1.vue";
import Right1 from "./components/Right1.vue";
</script>

<style scoped>
  @import "./assets/css/style.css";
</style>