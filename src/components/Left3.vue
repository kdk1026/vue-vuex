<template>
    <div>
        <h1>Left3 : {{number}}</h1>
    </div>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";

    const store = useStore();

    // const number = computed(() => store.state.number.number);
    const number = computed(() => store.getters["number/getNumber"]);
</script>

<style scoped>

</style>