<template>
  <form class="post-form" name="create-post-form" @submit.prevent>
    <h4>Создание поста</h4>
    <MyInput placeholder="Название" v-model="post.title" />
    <MyInput placeholder="Описание" v-model="post.body" />
    <MyButton class="post-form__createBtn" @click="createPost">Создать</MyButton>
  </form>
</template>

<script lang="ts">
export default {
  data() {
    return {
      post: {
        id: null as number | null,
        title: '',
        body: '',
      },
    };
  },
  methods: {
    createPost() {
      this.post.id = Date.now();
      this.$emit('create', this.post);

      this.post = {
        title: '',
        body: '',
        id: null,
      };
    },
  },
  watch: {
    post: {
      handler(newVal) {
        console.log(newVal);
      },
      deep: true,
    },
  },
};
</script>

<style scoped>
.post-form {
  padding: 20px 0;
  gap: 15px;
  display: flex;
  flex-direction: column;
}
.post-form__createBtn {
  align-self: flex-end;
}
</style>
