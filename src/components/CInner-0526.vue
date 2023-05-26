<template>
  <div>抽籤吧</div>
  <!-- 3. 子層收到父層的 props，拿來用 -->
  {{ `父層來的 ${probability}` }}
  <button type="button" @click="getNewNumber">抽</button>
</template>

<script setup>

// 2. 定義好子層 props 的接收方法
const props = defineProps(["probability"]);

// 子層送 result.value 出去
const emit = defineEmits(["newResult"]);

function getNewNumber() {
  // console.log(props.probability); // 這樣才取的到值
  const result = Math.random() > props.probability ? "吉" : "凶";
  // console.log(result);
  emit('newResult', result);
}

</script>