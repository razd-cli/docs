// .vitepress/theme/index.ts
import DefaultTheme from "vitepress/theme";
import "@catppuccin/vitepress/theme/mocha/mauve.css";
import AsciinemaPlayer from "./components/AsciinemaPlayer.vue";
import VideoPlayer from "./components/VideoPlayer.vue";
import { yandexMetrika } from "@hywax/vitepress-yandex-metrika";

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component("AsciinemaPlayer", AsciinemaPlayer);
    app.component("VideoPlayer", VideoPlayer);

    yandexMetrika(app, {
      counter: {
        id: 105096989,
        initParams: {
          webvisor: true,
          clickmap: true,
          trackLinks: true,
          accurateTrackBounce: true,
        },
      },
    });
  },
};
