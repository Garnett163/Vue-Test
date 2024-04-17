<template>
  <div class="nav-bar">
    <MyButton class="nav-bar__link" @click="$router.push('/')">Home page</MyButton>
    <router-link class="nav-bar__link" to="/post">Post page</router-link>
    <MyButton class="nav-bar__link" @click="$router.push('/about')">About page TEST</MyButton>
  </div>
</template>

<script lang="ts">
import MyButton from '../UI/MyButton.vue';
export default {};
</script>

<style scoped>
.nav-bar {
  padding: 20px 20px;
  display: flex;
  align-items: center;
  gap: 20px;
}
.nav-bar__link {
  text-decoration: none;
  color: rgb(120, 80, 80);
}
.nav-bar__link:hover {
  opacity: 0.8;
}
</style>
