<script setup lang="ts">
	import {computed} from "vue";
	import TextElement from "./elements/TextElement.vue";
	import ImageElement from "./elements/ImageElement.vue";
	import {RendererType} from "../types/renderers";

	const props = defineProps<{
		element: any,
		items: any,
	}>();

	const component = computed(() => {
		let component: {};
		switch (props.element.renderer) {
			case RendererType.Text:
				component = TextElement;
				break;
			case RendererType.Image:
				component = ImageElement;
				break;
			default:
				component = TextElement;
		}

		return component;
	})

</script>

<template>
		<component
			:items="props.items"
			:is="component"
			:element="props.element"
		/>
</template>

<style scoped>

</style>
