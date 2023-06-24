<template>
  <CNavbar />
  <div>我是 0608 的皮</div>
  <CInner0608 />
</template>

<script setup>
import CNavbar from '../components/CNavbar.vue';
import CInner0608 from '../components/CInner-0608.vue'
import { ref, provide } from "vue";
// 範例 - 1
// 簡單的的使用
const provideExample = ref(5);

provide("provideExample", provideExample);

// 範例 - 2
// 以函式 updateLocation 來響應式更動來自 inject 的資料
const location = ref('North Pole')

function updateLocation() {
  location.value = 'South Pole'
}

//  default 是物件型式
provide('location', {
  location,
  updateLocation
})
</script>