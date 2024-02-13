<template>
  <input class="my-input" :value="modelValue" @input="updateInput" />
</template>

<script lang="ts">
export default {
  name: 'MyInput',
  props: {
    modelValue: [String, Number],
  },
  methods: {
    updateInput(event) {
      this.$emit('update:modelValue', event.target.value);
    },
  },
};
</script>

<style>
.my-input {
  padding: 10px 15px;
  width: 100%;
  border: 1px solid rgb(80, 80, 235);
  border-radius: 10px;
}
</style>
