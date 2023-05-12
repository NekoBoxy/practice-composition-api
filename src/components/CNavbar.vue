<template>
  <RouterLink v-for="menu in menus" :to="menu.to" :key="menu.to">{{ menu.title }}</RouterLink>
  <!-- <RouterLink to="/Practice-02">Practice-02</RouterLink> -->
</template>

<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

const menus = ref([
  {
    to: "/Practice-01",
    title: "Practice-01",
  },
  {
    to: "/Practice-02",
    title: "Practice-02",
  },
]);

</script>