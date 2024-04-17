<template>
  <main class="main">
    <h1 class="main__title">Страница с постами</h1>
    <MyInput v-model="searchQuery" placeholder="Поиск по названию" />
    <div class="main__container">
      <div class="main__containerBtns">
        <MyButton class="main__createBtn" @click="showModal">Создать пост</MyButton>
        <MySelect v-model="selectedSort" :options="sortOptions" />
      </div>
      <MyAvatar />
    </div>
    <MyModal v-model:show="modalVisible">
      <PostForm @create="createPost" />
    </MyModal>
    <PostList v-bind:posts="sortedAndSearchedPosts" @delete="deletePost" v-if="!isPostsLoading" />
    <div class="main__loading" v-else>Идет загрузка...</div>
    <PaginationPosts :page="page" :totalPage="totalPage" @change-page="handlePageChange" />
    <!-- <ul>
      <li
        v-for="pageNumber in totalPage"
        :key="pageNumber"
        class="page"
        :class="{ 'pagination-posts__item_active': page === pageNumber }"
        @click="changePageNumberTwo(pageNumber)"
      >
        {{ pageNumber }}
      </li>
    </ul> -->
  </main>
</template>

<script lang="ts">
import PostList from './components/PostList/PostList.vue';
import PostForm from './components/PostForm/PostForm.vue';
import PaginationPosts from './components/PaginationPosts/PaginationPosts.vue';
import axios from 'axios';
import { IPost } from './types/typePost';

export default {
  components: {
    PostList,
    PostForm,
    PaginationPosts,
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
      searchQuery: '',
      page: 1,
      limit: 10,
      totalPage: 0,
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
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
          params: {
            _page: this.page,
            _limit: this.limit,
          },
        });
        this.totalPage = Math.ceil(response.headers['x-total-count'] / this.limit);
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
    handlePageChange(pageNumber: number) {
      this.page = pageNumber;
    },
    changePageNumberTwo(pageNumber: number) {
      this.page = pageNumber;
    },
  },
  mounted() {
    this.fetchPosts();
  },
  computed: {
    sortedPosts() {
      return [...this.posts].sort((post1: IPost, post2: IPost) => {
        return post1[this.selectedSort]?.localeCompare(post2[this.selectedSort]);
      });
    },
    sortedAndSearchedPosts() {
      return this.sortedPosts.filter((post: IPost) => {
        return post.title.toLowerCase().includes(this.searchQuery.toLowerCase());
      });
    },
  },
  watch: {
    // selectedSort(newValue: 'title' | 'body') {
    //   this.posts.sort((post1, post2) => {
    //     return post1[newValue]?.localeCompare(post2[newValue]);
    //   });
    // },
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

.pagination-posts__item_active {
  background-color: rgb(152, 101, 6);
}
</style>
