<template>
  <button class="my-button">
    <slot></slot>
  </button>
</template>

<script lang="ts">
export default {
  name: 'MyButton',
};
</script>

<style>
.my-button {
  padding: 10px 20px;
  background: none;
  color: #fff;
  border: 1px solid rgb(80, 80, 235);
  border-radius: 10px;
  cursor: pointer;
  font-size: 18px;
}

.my-button:hover {
  opacity: 0.7;
}
</style>
