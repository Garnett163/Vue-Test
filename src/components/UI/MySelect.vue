<template>
  <select class="select" :value="modelValue" @change="changeOptions">
    <option class="select__option select__option_inactive" disabled value="">Выберите из списка</option>
    <option class="select__option" v-for="option in options" :key="option.value" :value="option.value">
      {{ option.name }}
    </option>
  </select>
</template>

<script lang="ts">
export default {
  name: 'MySelect',
  props: {
    modelValue: {
      type: String,
    },
    options: {
      type: Array as () => { value: string; name: string }[],
      default: () => [],
    },
  },
  methods: {
    changeOptions(event: Event) {
      const target = event.target as HTMLSelectElement;
      this.$emit('update:modelValue', target.value);
    },
  },
};
</script>

<style scoped>
.select {
  padding: 10px 15px;
  max-width: 200px;
  background: none;
  color: #fff;
  border: 1px solid rgb(80, 80, 235);
  border-radius: 10px;
  cursor: pointer;
  font-size: 18px;
}
.select__option {
  font-size: 18px;
  background-color: #242424;
}
</style>
