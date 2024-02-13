<template>
  <main class="main">
    <h1 class="main__title">Страница с постами</h1>
    <div class="main__container">
      <div class="main__containerBtns">
        <MyButton class="main__createBtn" @click="showModal">Создать пост</MyButton>
        <MySelect :v-model="selectedSort" :options="sortOptions"></MySelect>
      </div>
      <MyAvatar />
    </div>
    <MyModal v-model:show="modalVisible">
      <PostForm @create="createPost" />
    </MyModal>
    <PostList v-bind:posts="posts" @delete="deletePost" v-if="!isPostsLoading" />
    <div class="main__loading" v-else>Идет загрузка...</div>
  </main>
</template>

<script lang="ts">
import PostList from './components/PostList/PostList.vue';
import PostForm from './components/PostForm/PostForm.vue';
import axios from 'axios';
import { IPost } from './types/typePost';

export default {
  components: {
    PostList,
    PostForm,
  },
  data() {
    return {
      posts: [
        { id: 111, title: 'JavaScript', body: 'Описание поста JavaScript' },
        { id: 222, title: 'Python', body: 'Описание поста Python' },
        { id: 333, title: 'C#', body: 'Описание поста C# ' },
        { id: 444, title: 'C++', body: 'Описание поста C++' },
      ] as IPost[],
      modalVisible: false,
      isPostsLoading: false,
      selectedSort: '',
      sortOptions: [
        { value: 'title', name: 'По названию' },
        { value: 'body', name: 'По описанию' },
      ],
    };
  },
  methods: {
    async fetchPosts() {
      try {
        this.isPostsLoading = true;
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=6');
        this.posts = [...this.posts, ...response.data];
      } catch (error) {
        alert('Произошла ошибка');
      } finally {
        this.isPostsLoading = false;
      }
    },
    createPost(post: IPost) {
      this.posts.push(post);
      this.modalVisible = false;
    },
    deletePost(post: IPost) {
      this.posts = this.posts.filter(item => item.id !== post.id);
    },
    showModal() {
      this.modalVisible = true;
    },
  },
  mounted() {
    this.fetchPosts();
  },
  watch: {
    selectedSort(newValue: 'title' | 'body') {
      this.posts.sort((post1, post2) => {
        return post1[newValue]?.localeCompare(post2[newValue]);
      });
    },
  },
};
</script>

<style scoped>
.main {
  padding: 0 20px;
  gap: 20px;
  display: flex;
  flex-direction: column;
}

.main__title {
  margin-top: 20px;
}

.main__containerBtns {
  display: flex;
  gap: 50px;
}

.main__createBtn {
  max-width: 200px;
}

.main__loading {
  font-size: 30px;
}

.main__container {
  display: flex;
  align-items: center;
  gap: 50px;
}
</style>
