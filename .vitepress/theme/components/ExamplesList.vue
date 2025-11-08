<template>
  <div class="examples-grid">
    <ExampleCard
      v-for="example in displayExamples"
      :key="example.title"
      :title="example.title"
      :description="example.description"
      :icon="example.icon"
      :tags="example.tags"
      :website="example.website"
      :source="example.source"
    />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import ExampleCard from './ExampleCard.vue';

export interface Example {
  title: string;
  description: string;
  icon: string;
  tags: string[];
  website?: string;
  source?: string;
}

interface Props {
  examples?: Example[];
}

const props = withDefaults(defineProps<Props>(), {
  examples: undefined,
});

const defaultExamples: Example[] = [
  {
    title: 'Node.js API Server',
    description: 'RESTful API server built with Express.js, featuring authentication, database integration, and API documentation.',
    icon: 'nodedotjs',
    tags: ['node.js', 'express', 'typescript'],
    source: 'https://github.com/razd-cli/razd-nodejs-example'
  },
  {
    title: 'Python Data Pipeline',
    description: 'Data processing pipeline using Python with pandas, numpy, and automated testing setup.',
    icon: 'python',
    tags: ['python', 'pandas', 'pytest'],
    source: 'https://github.com/razd-cli/razd-python-example'
  },
  {
    title: 'Rust CLI Tool',
    description: 'High-performance command-line tool written in Rust with cross-platform compilation support.',
    icon: 'rust',
    tags: ['rust', 'cli', 'cargo'],
    source: 'https://github.com/razd-cli/razd-rust-example'
  },
  {
    title: 'Go Microservice',
    description: 'Microservice architecture with Go, including gRPC, Docker containerization, and Kubernetes deployment.',
    icon: 'go',
    tags: ['go', 'grpc', 'docker'],
    source: 'https://github.com/razd-cli/razd-go-example'
  },
  {
    title: 'React Application',
    description: 'Modern React application with TypeScript, state management, and component library integration.',
    icon: 'react',
    tags: ['react', 'typescript', 'vite'],
    source: 'https://github.com/razd-cli/razd-react-example'
  },
  {
    title: 'Vue.js Dashboard',
    description: 'Admin dashboard built with Vue 3, Composition API, and real-time data visualization.',
    icon: 'vuedotjs',
    tags: ['vue', 'typescript', 'pinia'],
    source: 'https://github.com/razd-cli/razd-vue-example'
  }
];

const displayExamples = computed(() => props.examples || defaultExamples);
</script>

<style scoped>
.examples-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
}

@media (max-width: 768px) {
  .examples-grid {
    grid-template-columns: 1fr;
  }
}
</style>
