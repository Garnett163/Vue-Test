<template>
  <li class="post-item">
    <div>
      <p>ID: {{ post.id }}</p>
      <h4>Название: {{ post.title }}</h4>
      <p>Описание: {{ post.body }}</p>
    </div>
    <MyButton class="post-item__deleteBtn" @click="$emit('delete', post)">Удалить</MyButton>
  </li>
</template>

<script lang="ts">
import { IPost } from '../../../types/typePost';

export default {
  props: {
    post: {
      type: Object as () => IPost,
      required: true,
    },
  },
};
</script>

<style scoped>
.post-item {
  padding: 15px 20px;
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 2px solid rgb(80, 80, 235);
}
</style>
