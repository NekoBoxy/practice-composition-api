<template>
  <CNavbar />
  <!-- props 2. 父層送 probability 進子層 -->
  <!-- emit 5. 統一好內外層的 emit，可見 HTML 說明 -->
  <CInner05262 :probability="probability" @newResult="getResult"></CInner05262>
  <!-- emit 7. 顯示子層來的 emit 經處理後的結果 -->
  <div>{{ `子層來的${resultSring}` }}</div>
  <div>
    <h3>emit 形式：宣告為陣列(簡單宣告)或物件(嚴格檢查)的方式</h3>
    <span>本頁為<b>物件</b>形式</span>
    <span></span>
  </div>
</template>

<script setup>
import CNavbar from '../components/CNavbar.vue';
import CInner05262 from '../components/CInner-0526-2.vue';
import { ref } from "vue";

// props 1. 定義好子層的 props 內容
const probability = ref(0.5);
const resultSring = ref("");

// emit 6. 用 getResult() 處理子層來的 emit
function getResult(result) {
  // console.log(result);
  resultSring.value = result;
}

</script>