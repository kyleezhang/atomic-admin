import "element-plus/lib/theme-chalk/index.css";
import lang from "element-plus/lib/locale/lang/zh-cn";
import locale from "element-plus/lib/locale";
import { App } from "vue";

import { ElButton, ElLoading, ElMenu, ElSubmenu, ElMenuItemGroup, ElMenuItem, ElMessage, ElMessageBox, ElNotification, ElScrollbar } from "element-plus";

const plugins = [ElLoading, ElMessage, ElMessageBox, ElNotification];

const components = [ElButton, ElMenu, ElSubmenu, ElMenuItemGroup, ElMenuItem, ElScrollbar];

locale.use(lang);

export default {
  install(app: App<any>): void {
    components.forEach(component => app.component(component.name, component));
    plugins.forEach(plugin => app.use(plugin as any));
  },
};
