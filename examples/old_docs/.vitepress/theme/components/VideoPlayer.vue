<template>
    <div class="video-container">
        <video :src="videoSrc" controls :autoplay="autoplay" :loop="loop" :muted="muted" :style="{ maxHeight: height }">
            Your browser does not support the video tag.
        </video>
    </div>
</template>

<script setup>
import { withBase } from 'vitepress'
import { computed } from 'vue'

const props = defineProps({
    src: {
        type: String,
        required: true
    },
    height: {
        type: String,
        default: '500px'
    },
    autoplay: {
        type: Boolean,
        default: false
    },
    loop: {
        type: Boolean,
        default: false
    },
    muted: {
        type: Boolean,
        default: false
    }
})

const videoSrc = computed(() => withBase(props.src))
</script>

<style scoped>
.video-container {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

video {
    width: 100%;
    max-width: 100%;
    height: auto;
    aspect-ratio: 16 / 9;
    object-fit: contain;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
</style>
