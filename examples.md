---
layout: home
---

<script setup>
import ExamplesList from './.vitepress/theme/components/ExamplesList.vue'

const examples = [
  {
    title: 'Node.js HTTP Server',
    description: 'Простой HTTP сервер на нативном модуле Node.js с HTML страницей.',
    icon: 'nodedotjs',
    tags: ['node.js', 'http'],
    source: 'https://github.com/razd-cli/razd-nodejs-example',
    website: '/stack/nodejs/'
  }
]
</script>

<style scoped>
h1 {
  margin-top: 3rem;
}

@media (max-width: 768px) {
  h1 {
    margin-top: 1.5rem;
  }
}
</style>

# Примеры

Список примеров проектов с Razdfile для быстрой настройки.


<ExamplesList :examples="examples" />


::: info Руководства по настройке различных окружений
Смотрите [документацию по стекам технологий](/stack/) для подробных руководств по настройке различных окружений.
:::
