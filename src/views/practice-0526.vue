<template>
  <CNavbar />
  <!-- props 2. 父層送 probability 進子層 -->
  <!-- emit 5. 統一好內外層的 emit，可見 HTML 說明 -->
  <CInner0526 :probability="probability" @newResult="getResult"></CInner0526>
  <!-- emit 7. 顯示子層來的 emit 經處理後的結果 -->
  <div>{{ `子層來的${resultSring}` }}</div>
  <div>
    <h3>emit 形式：宣告為陣列(簡單宣告)或物件(嚴格檢查)的方式</h3>
    <span>本頁為<b>陣列</b>形式</span>
    <div>物間格式的範例請點上方emit 物件</div>
  </div>
  <div>
    <h3>說明：props</h3>
    <span>:probability="probability"</span>
    <p>:probability 子層中先設好用來接收 props 的名稱</p>
    <p>="probability" 父層接收子層 props 的儲存區</p>
  </div>
  <div>
    <h3>說明：emit</h3>
    <span>@newResult="getResult"</span>
    <p>@newResult 子層中先設好用來存放 emit 用的事件名稱</p>
    <p>="getResult" 在父層中處理 emit 的方法</p>
    <p>@ 是 v-on</p>
  </div>
</template>

<script setup>
import CNavbar from '../components/CNavbar.vue';
import CInner0526 from '../components/CInner-0526.vue';
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