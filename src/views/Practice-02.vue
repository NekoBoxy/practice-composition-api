<template>
  <CNavbar />
  <h1>Template Refs 模板引用</h1>
  <!-- test -->
  <span v-for="( text, index ) in messages" :key="index">{{ text }}</span>

  <!-- example 1 -->
  <!-- <input ref="inputRef" /> -->

  <!-- example 2 -->
  <!-- <ul>
    <li v-for="( item, index ) in list" ref="itemRefs" :key="index">
      {{ item }}
    </li>
  </ul> -->

  <!-- example 3 -->
  <!-- <input :ref="(el) => { test = el }" @change="handleChange"> -->

  <!-- example 4 -->
  <!-- <Practice01 ref="eg4" /> -->
</template>

<script setup>
import CNavbar from '../components/CNavbar.vue'
import { ref, onMounted, watchEffect } from 'vue';
// test
const messages = ref([
  { text01: "hello" },
  { text02: "good" },
]);

// example 1
// const inputRef = ref(null);

// example 2
// const itemRefs = ref(null);

// const list = ref([
//   1, 3, 9, 11,
// ])

// example 3
// const test = ref(null);
// const handleChange = () => {
//   console.log(test.value);
// };
// const handleChange = function () {
//   console.log(test.value);
// };


// example 4
// import Practice01 from './Practice-01.vue';
// const eg4 = ref(null);

// onMounted(() => {
//   // example 1
//   // inputRef.value.focus();
//   // inputRef.value.value = "test1";
//   // console.log("flag 1");

//   // example2
//   // console.log(itemRefs.value);

//   // example 4
//   console.log(eg4.value.even(5));
// })

// watchEffect(() => {
//   // example 1
//   // console.log("inputRef.value", inputRef.value);
//   // if (inputRef.value) { // 若 ref 抓到了已生成的 <inputRef> dom/實例 instance
//   //   inputRef.value.value = "test2";
//   //   inputRef.value.focus();
//   //   console.log("watchEffect 1");
//   // } else {
//   //   // ref 抓不到尚未生成的 <input>，ref 值為預設的 null，進 else
//   //   console.log("watchEffect 2");
//   // }

// })


</script>

<style scoped>
span {
  display: block;
}
</style>