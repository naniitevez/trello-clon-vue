import * as types from "./mutations-types";
import API from "@/api";

export default {
  //fetch de los paneles dle usuario
  fetchBoards({ commit }, { user }) {
    commit(types.FETCH_BOARDS_REQUEST);

    API.getBoardsByUser(user)
      .then((response) => {
        commit(types.FETCH_BOARDS_SUCCESS, response.data);
      })
      .then((snap) =>
        commit(types.FETCH_BOARDS_SUCCESS, { boards: snap.val() })
      )
      .catch((error) => commit(types.FETCH_BOARDS_FAILURE, { error }));
  },

  //fetch de las listas asociadas a un panel
  fetchLists({ commit }, { board }) {
    commit(types.FETCH_LISTS_REQUEST);

    API.getListFromBoard(board)
      .then((snap) => commit(types.FETCH_LISTS_SUCCESS, { lists: snap.val() }))
      .catch((error) => commit(types.FETCH_LISTS_FAILURE, { error }));
  },

  // fetch de las tareas de una lista
  fetchTasks({ commit }, { list }) {
    commit(types.FETCH_TASKS_REQUEST);

    API.getTasksFromList(list)
      .then((snap) => commit(type.FETCH_TASKS_SUCCESS, [tasks > snap.val()]))
      .catch((error) => commit(type.FETCH_TASKS_FAILURE, { error }));
  },

  // añadir un nuevo panel
  addBoard({ commit }, { name }) {
    API.postBoard(name).then((board) => commit(types.ADD_BOARD, { board }));
  },

  addColumn({ commit }, { board, name }) {
    API.postList(board, name).then((column) =>
      commit(types.ADD_COLUMN, {
        column,
      })
    );
  },

  addTask({ commit }, { list, title }) {
    API.postTask(list, title).then((task) => commit(types.ADD_TASK, { task }));
  },

  deleteTask({ commit }, { taskId }) {
    API.deleteTask(taskId).then(() => commit(types.DELETE_TASK, taskId));
  },

  markAsCompleted({ commit }, { task }) {
    API.markAsCompleted(task.id).then(() =>
      commit(types.MARK_AS_COMPLETED, { task })
    );
  },
};
