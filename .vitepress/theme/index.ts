// .vitepress/theme/index.ts
import DefaultTheme from "vitepress/theme";
import "@catppuccin/vitepress/theme/mocha/mauve.css";
import AsciinemaPlayer from "./components/AsciinemaPlayer.vue";
import VideoPlayer from "./components/VideoPlayer.vue";

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component("AsciinemaPlayer", AsciinemaPlayer);
    app.component("VideoPlayer", VideoPlayer);
  },
};
