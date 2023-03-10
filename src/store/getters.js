export default {
  getListByBoard: (state) => (boardId) => {
    return Object.values(state.list).filter((list) => list.board === boardId);
  },

  getTasksFromList: (state) => (listId) => {
    return Object.values(state.tasks).filter((task) => task.list === listId);
  },
};
