// .vitepress/theme/index.ts
import DefaultTheme from "vitepress/theme";
import "@catppuccin/vitepress/theme/mocha/mauve.css";
import AsciinemaPlayer from "./components/AsciinemaPlayer.vue";

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component("AsciinemaPlayer", AsciinemaPlayer);
  },
};
