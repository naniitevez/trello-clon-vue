import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import BoardView from "@/views/BoardView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/board/:id:name",
    name: "board", //le agrega el nombre para conectar con el router-link
    component: BoardView,
    props: true, // permite que las props que se pasan por el objeto params se puedan utilizar
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
