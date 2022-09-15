import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "games",
      component: () => import("@/views/GamesView.vue"),
    },
    {
      path: "/game/:id",
      name: "game",
      component: () => import("@/views/GameView.vue"),
      props: true,
    },
  ],
});

export default router;
