<template>
  <div :id="castId"></div>
</template>

<script setup>
import { onMounted } from 'vue'

const props = defineProps({
  src: {
    type: String,
    required: true
  },
  castId: {
    type: String,
    required: true
  }
})

onMounted(() => {
  const script = document.createElement('script')
  script.src = props.src
  script.id = props.castId
  script.async = true
  document.getElementById(props.castId).appendChild(script)
})
</script>
