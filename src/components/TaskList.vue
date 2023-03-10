<template>
  <ul>
    <li
      v-for="(task, index) in tasks"
      :key="index"
      :class="{ completed: task.completed }"
    >
      {{ task.title }}
    </li>
    <input
      type="text"
      placeholder="Añade una nueva tarea..."
      v-model="title"
      @keyup.enter="add()"
    />
  </ul>
</template>

<script>
import { ref } from "vue";

export default {
  name: "TaskList",
  props: {
    listId: String,
    tasks: Array,
  },
  setup() {
    const title = ref("");

    return {};
  },
};
</script>

<style lang="scss" scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;

  li {
    background: #fafafa;
    border-radius: 3px;
    border-bottom: 1px solid #ccc;
    margin: 0.25rem 0;
    padding: 1rem;

    &.completed {
      background: #cfd8dc;
      color: #90a4ae;
    }
  }
}

input {
  box-sizing: border-box;
  background: #546e7a;
  border: 2px solid #546e7a;
  border-radius: 3px;
  font-size: 1.1rem;
  outline: 0;
  padding: 0.5rem;
  transition: all 600ms ease;

  &:focus,
  &:active {
    background: white;
    color: #546e7a;
  }

  &::placeholder {
    color: white;
  }
}
</style>