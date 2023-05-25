<template>
  <CNavbar />
  <div>{{ msg }}</div>
</template>

<script setup>
import CNavbar from '../components/CNavbar.vue';
import { ref } from 'vue';

const msg = ref("嗨");

</script>

<style scoped></style>