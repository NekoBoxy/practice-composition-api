<template>
  <CNavbar />
  <!-- 直接使用 $translate 呼叫 i18n -->
  <h1>plugin 練習</h1>
  <div>{{ $translate('greetings.hello') }}</div>
</template>

<script setup>
import { inject } from 'vue';
import CNavbar from '../components/CNavbar.vue';
// 從 provide 拿資料
const i18n = inject("i18n");
console.log(i18n.greetings.hello);
</script>