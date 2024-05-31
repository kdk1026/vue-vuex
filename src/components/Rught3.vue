<template>
    <div>
        <h1>Right3</h1>
        <button @click="increaseNumber">+</button>
        <button @click="decreaseNumber">-</button>
        <input type="text" v-model="incrementAmount" />
        <button @click="incrementByAmount">Add Amount</button>
    </div>
</template>

<script setup>
import { useStore } from "vuex";

    const incrementAmount = defineModel({ default: 2 });

    const store = useStore();

    const increaseNumber = () => {
        store.dispatch("number/increaseNumber");
    };

    const decreaseNumber = () => {
        store.dispatch("number/decreaseNumber");
    };

    const incrementByAmount = () => {
        store.dispatch("number/incrementByAmount", incrementAmount.value);
    }
</script>

<style scoped>

</style>