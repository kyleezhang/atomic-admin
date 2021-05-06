import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import element from "./element";
import svgIcon from "comps/svg-icon/Index.vue";

// 全局样式引入
import "styles/index.scss";

createApp(App).use(router).use(element).component("svg-icon", svgIcon).mount("#app");
