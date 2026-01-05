<template>
    <div class="example-card">
        <div class="example-header">
            <div class="icon-wrapper" v-html="iconSvg"></div>
        </div>
        <div class="example-content">
            <h3>{{ title }}</h3>
            <p>{{ description }}</p>
            <div class="tags">
                <span v-for="tag in tags" :key="tag" class="tag">{{ tag }}</span>
            </div>
            <div class="links">
                <a v-if="guide" :href="guideUrl" class="link-button">
                    {{ guideLabel }}
                </a>
                <a v-if="source" :href="source" target="_blank" rel="noopener noreferrer" class="link-button">
                    {{ sourceLabel }}
                </a>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { withBase } from 'vitepress';
import * as simpleIcons from 'simple-icons';

export interface Props {
    title: string;
    description: string;
    icon: string;
    tags?: string[];
    guide?: string;
    source?: string;
    guideLabel?: string;
    sourceLabel?: string;
}

const props = withDefaults(defineProps<Props>(), {
    tags: () => [],
    guideLabel: undefined,
    sourceLabel: undefined,
});

const iconSvg = computed(() => {
    const iconKey = `si${props.icon.charAt(0).toUpperCase()}${props.icon.slice(1)}`;
    const icon = simpleIcons[iconKey as keyof typeof simpleIcons];

    if (icon && typeof icon === 'object' && 'svg' in icon) {
        return icon.svg;
    }

    // Fallback icon
    return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/></svg>';
});

// Detect locale from URL for default labels
const isEnglish = typeof window !== 'undefined' && window.location.pathname.startsWith('/en/');

const guideLabel = computed(() => props.guideLabel || (isEnglish ? 'Guide' : 'Гайд'));
const sourceLabel = computed(() => props.sourceLabel || (isEnglish ? 'Source' : 'Source'));

// Add base path to guide URL
const guideUrl = computed(() => props.guide ? withBase(props.guide) : '');
</script>

<style scoped>
.example-card {
    background: var(--vp-c-bg-soft);
    border: 1px solid var(--vp-c-divider);
    border-radius: 12px;
    overflow: hidden;
    transition: all 0.3s ease;
    height: 100%;
    display: flex;
    flex-direction: column;
}

.example-card:hover {
    border-color: var(--vp-c-brand-1);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    transform: translateY(-2px);
}

.example-header {
    background: linear-gradient(135deg, var(--vp-c-brand-1) 0%, var(--vp-c-brand-2) 100%);
    padding: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 200px;
}

.icon-wrapper {
    width: 80px;
    height: 80px;
    color: white;
    opacity: 0.9;
}

.icon-wrapper :deep(svg) {
    width: 100%;
    height: 100%;
    fill: currentColor;
}

.example-content {
    padding: 1.5rem;
    flex: 1;
    display: flex;
    flex-direction: column;
}

.example-content h3 {
    margin: 0 0 0.75rem 0;
    font-size: 1.25rem;
    font-weight: 600;
    color: var(--vp-c-text-1);
}

.example-content p {
    margin: 0 0 1rem 0;
    color: var(--vp-c-text-2);
    font-size: 0.95rem;
    line-height: 1.6;
    flex: 1;
}

.tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-bottom: 1rem;
}

.tag {
    padding: 0.25rem 0.75rem;
    background: var(--vp-c-default-soft);
    border-radius: 12px;
    font-size: 0.85rem;
    color: var(--vp-c-text-2);
}

.links {
    display: flex;
    gap: 0.75rem;
    margin-top: auto;
}

.link-button {
    flex: 1;
    padding: 0.5rem 1rem;
    text-align: center;
    background: var(--vp-c-default-soft);
    border-radius: 6px;
    text-decoration: none;
    color: var(--vp-c-text-1);
    font-size: 0.9rem;
    font-weight: 500;
    transition: all 0.2s ease;
}

.link-button:hover {
    background: var(--vp-c-brand-1);
    color: white;
}
</style>
