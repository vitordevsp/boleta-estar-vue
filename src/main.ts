import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import { appStore } from "./store"
import "./assets/main.css"

const app = createApp(App)

app.use(router)
app.use(appStore)

app.mount("#app")
