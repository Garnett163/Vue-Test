<template>
  <div class="modal" v-if="show" @click="closeModal">
    <div @click.stop class="modal__content">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'MyModal',
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    closeModal() {
      this.$emit('update:show', false);
    },
    handleCloseEscapeKey(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        this.closeModal();
      }
    },
  },
  mounted() {
    window.addEventListener('keydown', this.handleCloseEscapeKey);
  },
  beforeUnmount() {
    window.removeEventListener('keydown', this.handleCloseEscapeKey);
  },
};
</script>

<style scoped>
.modal {
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  display: flex;
}

.modal__content {
  margin: auto;
  padding: 10px 30px;
  border: 2px solid rgb(80, 80, 235);
  background: #000;
  border-radius: 12px;
  min-width: 450px;
}
</style>
