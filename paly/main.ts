import { createApp } from "vue";
import App from "./app.vue";

const app = createApp(App);
import codeTest from "@codeTest/components"

app.use(codeTest).mount("#app");
