<template>
  <div>0608 inner</div>
  <h4>範例 1</h4>
  <div>{{ `來自皮的 ${message}` }}</div>
  <h4>範例 2</h4>
  <button @click="updateLocation">{{ location }}</button>
</template>

<script setup>
import { inject } from "vue";
// 範例 1
const message = inject("provideExample");
console.log(message);

// 範例 2
const { location, updateLocation } = inject('location')
</script>