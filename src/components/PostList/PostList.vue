<template>
  <div v-if="posts.length > 0">
    <h3>Список постов</h3>
    <ul class="post-list">
      <PostItem v-for="post in posts" :key="post.id" :post="post" @delete="$emit('delete', post)" />
    </ul>
  </div>
  <h2 class="post-list__empty-message" v-else>Список постов пуст</h2>
</template>

<script lang="ts">
import PostItem from './PostItem/PostItem.vue';
import { IPost } from '../../types/typePost';

export default {
  components: {
    PostItem,
  },
  props: {
    posts: {
      type: Array as () => IPost[],
      required: true,
    },
  },
  emits: ['delete'],
};
</script>

<style scoped>
.post-list {
  margin-top: 15px;
  list-style: none;
}

.post-list__empty-message {
  color: red;
}
</style>
