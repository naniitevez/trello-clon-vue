<template>
  <section>
    <h3><span>Mis paneles</span> > {{ name }}</h3>
    <input
      type="text"
      placeholder="Añade una lista"
      v-model="listName"
      @keyup.enter="add()"
    />
    <div class="container">
      <column
        v-for="(list, index) in boardList"
        :key="index"
        :listId="list.id"
        :name="list.name"
      >
      </column>
    </div>
  </section>
</template>

<script>
import Column from "@/components/Column";
import { ref, reactive } from "vue";

export default {
  name: "BoardView",
  components: {
    Column,
  },
  props: {
    name: String,
    id: String,
  },
  setup() {
    const listName = ref('')
    const boardList = reactive([
      { id: "1", name: "To Do" },
      { id: "2", name: "Doing" },
    ]);

    const add = () => {
      let element = {
        id: boardList.length + 1,
        name: listName.value,
      };
      boardList.push(element);
    };

    return {
        listName,
        boardList,
        add
    }
  }
};
</script>

<style lang="scss" scoped>
section {
  text-align: left;

  .container {
    display: flex;
    flex-direction: row;
  }
}

h3 {
  color: #37474f;
  text-align: left;
  margin: 1.5rem;

  span {
    color: #546e7a;
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