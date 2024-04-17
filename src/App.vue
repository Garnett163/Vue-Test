<template>
  <NavBar />
  <router-view />
</template>

<script lang="ts">
import NavBar from './components/NavBar/NavBar.vue';
export default {
  components: {
    NavBar,
  },
};
</script>

<style scoped></style>
