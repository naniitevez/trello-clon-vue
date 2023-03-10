<template>
  <div>
    <h3>Mis paneles</h3>
    <div class="boards-collection">
      <input
        type="text"
        placeholder="Añade un nuevo panel"
        v-model="boardName"
        @keyup.enter="add()"
      />
      <BoardCard
        v-for="(board, index) in boards"
        :key="index"
        :name="board.name"
        :id="board.id"
      />
    </div>
  </div>
</template>

<script>
import BoardCard from "@/components/BoardCard";
import { ref, reactive } from "vue";

export default {
  name: "HomeView",
  components: {
    BoardCard,
  },
  setup() {
    const boardName = ref("");
    const boards = reactive([
      { id: "1", name: "Tareas" },
      { id: "2", name: "Lista de compra" },
    ]);

    const add = () => {
      let element = {
        id: boards.length + 1,
        name: boardName.value,
      };
      boards.push(element);
    };

    return {
      boardName,
      boards,
      add,
    };
  },
};
</script>

<style lang="scss" scoped>
h3 {
  text-align: left;
  margin: 1.5rem;
}

.boards-collection {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: 1rem;
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
