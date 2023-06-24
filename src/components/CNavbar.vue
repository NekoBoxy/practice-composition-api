<template>
  <RouterLink v-for="menu in menus" :to="menu.to" :key="menu.to">{{ menu.title }}</RouterLink>
  <!-- <RouterLink to="/Practice-02">Practice-02</RouterLink> -->
</template>

<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

const menus = ref([
  {
    to: "/practice-01",
    title: "Practice-01",
  },
  {
    to: "/practice-02",
    title: "Practice-02",
  },
  {
    to: "/practice-0525",
    title: "practice-0525",
  },
  {
    to: "/practice-0526",
    title: "emit 宣告為陣列",
  },
  {
    to: "/practice-0526-2",
    title: "emit 宣告為物件",
  },
  {
    to: "/practice-0608",
    title: "practice-0608",
  },
]);

</script>