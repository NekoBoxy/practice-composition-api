<template>
  <CNavbar />
  <CInner0526 :probability="probability" @newResult="getResult"></CInner0526>
  <div>{{ `子層來的${resultSring}` }}</div>
  <!-- <CInner0526 :probability="probability" :handleFinish="handleClick(result)"></CInner0526> -->
</template>

<script setup>
import CNavbar from '../components/CNavbar.vue';
import CInner0526 from '../components/CInner-0526.vue';
import { ref } from "vue";

// 1. 父層送 probability 進子層
// const history = ref([]);
const probability = ref(0.5);
const resultSring = ref("");

// function handleFinish(result) {
//   history.value.push(result);
// }
function getResult(result) {
  // console.log(result);
  resultSring.value = result;
}


</script>

<style scoped></style>