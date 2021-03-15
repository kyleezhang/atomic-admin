import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import element from "./element";

// 全局样式引入
import "styles/index.scss";

createApp(App).use(router).use(element).mount("#app");
