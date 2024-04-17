<template>
  <ul class="pagination-posts__list">
    <li
      class="pagination-posts__item"
      v-for="pageNumber in totalPage"
      :key="pageNumber"
      :class="{ 'pagination-posts__item_active': page === pageNumber }"
      @click="changePageNumber(pageNumber)"
    >
      {{ pageNumber }}
    </li>
  </ul>
</template>

<script lang="ts">
export default {
  props: {
    page: {
      type: Number,
      required: true,
    },
    totalPage: {
      type: Number,
      required: true,
    },
  },
  methods: {
    changePageNumber(pageNumber: number) {
      this.$emit('change-page', pageNumber);
    },
  },
};
</script>

<style>
.pagination-posts__list {
  padding-bottom: 40px;
  list-style: none;
  display: flex;
  justify-content: center;
  gap: 20px;
}

.pagination-posts__item {
  padding: 5px 15px;
  border: 1px solid white;
  cursor: pointer;
}
.pagination-posts__item_active {
  background-color: rgb(152, 101, 6);
}
</style>
