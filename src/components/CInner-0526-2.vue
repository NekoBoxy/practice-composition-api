<template>
  <div>抽籤吧</div>
  <!-- props 4. 子層收到父層的 props，拿來用 -->
  {{ `父層來的 ${probability}` }}
  <!-- emit 2. 定義好如何取得 emit 的內容 -->
  <button type="button" @click="getNewNumber">抽</button>
</template>

<script setup>
// props 3. 定義好子層 props 的接收名稱 "probability"
const props = defineProps(["probability"]);

// emit 1-2 宣告形式：物件
// newResult 是 emit 名稱，result 是 emit 要帶去父層的值，經過驗證後才往父層送
const emit = defineEmits({
  newResult: (result) => {
    if (result) {
      console.log("result", result);
      console.log("typeof", typeof result);
      return true;
    } else {
      console.log("no ok");
      return false
    }
  }
});

function getNewNumber() {
  const result = Math.random() > props.probability ? "吉" : "凶";
  emit("newResult", result);
}
</script>