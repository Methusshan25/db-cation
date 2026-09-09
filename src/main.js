import { createApp } from "vue";
import "@mdi/font/css/materialdesignicons.css";
import PrimeVue from "primevue/config";
import Aura from "@primeuix/themes/aura";
import "vuetify/styles";
import { createVuetify } from "vuetify";
import router from "./router";
import "primeicons/primeicons.css";
import "./scss/default.scss";
import App from "./App.vue";
import AnimateOnScroll from "primevue/animateonscroll";

const app = createApp(App)
  .use(router)
  .use(createVuetify())
  .use(PrimeVue, {
    theme: {
      preset: Aura,
      options: {
        darkModeSelector: "system",
      },
    },
  });

app.directive("animateonscroll", AnimateOnScroll);
app.mount("#app");
