<template>
    <svg :class="svgClass" aria-hidden="true">
        <use :xlink:href="svgIcon" :fill="color"/>
    </svg>
</template>

<script setup>
import { computed } from 'vue'
const props = defineProps({
    name: {
        type: String,
        required: true,
    },
    class: {
        type: String,
        default: '',
    },
    color: {
        type: String,
        default: '#ffffff'
    },
})

const svgClass = computed(() => {
    if (props.class) {
        return `svg-icon ${props.class}`
    } else {
        return 'svg-icon'
    }
})

const svgIcon = computed(() => `#${props.name}`)

</script>

<style lang="scss" scoped>
.svg-icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
}
</style>