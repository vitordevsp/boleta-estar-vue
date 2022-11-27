import { createRouter, createWebHistory } from "vue-router"
import WelcomeView from "../views/WelcomeView.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "welcome",
      component: WelcomeView
    },
    {
      path: "/boleta",
      name: "boleta",
      component: () => import("../views/BoletaView.vue")
    }
  ]
})

export default router
