<template>
  <CNavbar />
  <!-- 我是父層 -->
  <div>
    <!-- <h1>props：將父/外層變數傳進子/內層的方法</h1>
    <p>在父元件的子元件標籤上以 v-bind 標示:子層名="外層的事物"，</p>
    <p>在子元件中使用 defineProps 接收父元件傳入的資料</p>
    <div>Q: 函式怎麼 props 呢? </div> -->
    <!-- 注意標籤中的(key)屬性不可大寫。(keyvalue 就沒差) -->
    <!-- 例：基本使用 -->
    <!-- 子層的內容被用到才會出現 -->
    <!-- <CInner0525 :title="msg"></CInner0525>
  <CInner0525 :title2="testFn"></CInner0525> -->

    <!-- 例：陣列 -->
    <!-- <CInner0525 :function-test="msg2.fn2"></CInner0525> -->
    <!-- <CInner0525 :list="msg2"></CInner0525> -->

    <!-- 例：物件 -->
    <!-- <CInner0525 :order-list="orderList"></CInner0525> -->
    <!-- <CInner0525 :order-list="orderList" :call-jack="callJack"></CInner0525> -->
  </div>
  <div>
    <h1>emit：將子層的資料傳給父層，父層再用函式接資料</h1>
    <p>先準備好子層的emit，再準備與設定父層的接收</p>
    <CInner0525 @send-num="getDataFromComponent" @send-string="getStringDataFromComponent"></CInner0525>
    <h2>{{ dataNum }}</h2>
    <h2>{{ dataString }}</h2>
  </div>
</template>

<script setup>
import CNavbar from '../components/CNavbar.vue';
import CInner0525 from '../components/CInner-0525.vue';
import { ref } from 'vue';

// 例：基本使用
// const msg = ref("你好我是父層來的海獺");
// function testFn() {
//   console.log("你呼叫了 testFn()")
// }

// 例：陣列
// const msg2 = ref([
//   {
//     name: "otter",
//     like: "any food",
//   },
//   {
//     testOtter:
//       function () {
//         console.log("我是父層來的 testOtter()");
//       },
//   }
// ]);

// 例：物件
// const orderList = ref([
//   {
//     name: 'Jack',
//     order: '檸檬紅茶',
//     price: 50
//   },
//   {
//     name: 'Lucky',
//     order: '珍珠奶茶',
//     price: 70
//   },
//   {
//     name: 'May',
//     order: '紅茶拿鐵',
//     price: 80
//   },
//   function callJack() {
//     console.log('Jack')
//   }
// ]);

// 例：emit
const dataNum = ref(0);
const dataString = ref("");
// 用來接資料的方法
const getDataFromComponent = (data) => {
  dataNum.value = data
}
// 用來接資料的方法
function getStringDataFromComponent(data) {
  dataString.value = data
}


</script>

<style scoped></style>