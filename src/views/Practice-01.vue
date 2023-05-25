<template>
  <CNavbar />
  <h1>setup 與 ref 宣告</h1>
  <div class="arr-demo">
    <span>以 v-for 顯示陣列</span>
    <ul v-for="numbers in sets" :key="numbers">
      <li v-for="n in even(numbers)" :key="n">{{ n }}</li>
    </ul>
  </div>
</template>

<script setup>
import CNavbar from '../components/CNavbar.vue'
import { ref } from 'vue';

const sets = ref([
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10]
]);

function even(numbers) {
  return numbers.filter((number) => number % 2 === 0)
}
// console.log(sets.value);
</script>

<style scoped>
.arr-demo {
  display: inline-block;
}
</style>