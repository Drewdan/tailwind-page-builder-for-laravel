<script setup lang="ts">

import {computed} from "vue";
import TextElement from "./TextElement.vue";

const props = defineProps<{
	element: any,
	items: any,
}>();

const element = computed((): typeof TextElement => {
	const rawConfig = props.items.find((x: any) => x.type === props.element.type);

	return {
		...rawConfig,
		...props.element,
	} as typeof TextElement
})

const computedStyles = computed(() => {
	let size: string;
	switch (element.value.size) {
		case 'sm':
			size = 'text-sm';
			break;
		case 'md':
			size = 'text-md';
			break;
		case 'lg':
			size = 'text-lg';
			break;
		case 'xl':
			size = 'text-xl';
			break;
		case '2xl':
			size = 'text-2xl';
			break;
		case '3xl':
			size = 'text-3xl';
			break;
		case '4xl':
			size = 'text-4xl';
			break;
		default:
			size = 'text-base';
	}

	let weight: string;
	switch (element.value.size) {
		case 'normal':
			weight = 'font-base';
			break;
		case 'bold':
			weight = 'font-bold';
			break;
		default:
			weight = 'font-base';
	}

	const styles = [
		size,
		weight,
	]
	return styles.join(' ');
})
</script>

<template>
	<component
		:is="element.type"
		:class="computedStyles"
		:key="element.id"
		v-html="element.content"
	/>
</template>

