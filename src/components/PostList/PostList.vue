<template>
  <div v-if="posts.length > 0">
    <h3>Список постов</h3>
    <TransitionGroup tag="ul" class="post-list" name="user-list">
      <!-- <ul class="post-list"> -->
      <PostItem v-for="post in posts" :key="post.id" :post="post" @delete="$emit('delete', post)" />
      <!-- </ul> -->
    </TransitionGroup>
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
.user-list-move,
.user-list-enter-active,
.user-list-leave-active {
  transition: all 0.5s ease;
}
.user-list-enter-from,
.user-list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
