<template>
  <div>抽籤吧</div>
  <!-- props 4. 子層收到父層的 props，拿來用 -->
  {{ `父層來的 ${probability}` }}
  <!-- emit 2. 定義好如何取得 emit 的內容 -->
  <button type="button" @click="getNewNumber">抽</button>

  <!-- 在 html v-on 監聽 emit -->
  <!-- <p>emit 也可以在 html 直接執行，但送出的值需要用 computed 算，且只能跑一次</p>
  <button type="button" @click="$emit('newResult', result)">抽</button> -->

  <!-- html 中，全做完 -->
  <!-- <p>直接在 html 上做好一切事情(算值、傳 emit)</p>
  <p>可以無限次計算，但是程式碼會很醜</p>
  <button type="button" @click="$emit('newResult', (() => {
    return Math.random() > props.probability ? '吉' : '凶';
  })())">抽</button> -->
</template>

<script setup>
// props 3. 定義好子層 props 的接收名稱 "probability"
const props = defineProps(["probability"]);

// emit 1. 定義好 emit 出去的名稱
// 宣告形式：陣列
const emit = defineEmits(["newResult"]);

// emit 3. 用 @click 觸發函式與其中的 emit
function getNewNumber() {
  // console.log(props.probability); // 這樣才取的到值
  // Math.random() 隨機產生一個介於 0 ~ 1 的數值。若數值大於 props.probability，結果為吉，否則為凶
  const result = Math.random() > props.probability ? "吉" : "凶";
  // emit 4. 將定義好的 emit 名稱("newResult")與值(result)，
  // 用 emit 往父層丟
  emit('newResult', result);
}

// 在 html v-on 監聽 emit
// import { computed } from "vue";
// const result = computed(() => {
//   return Math.random() > props.probability ? "吉" : "凶";
// })

</script>