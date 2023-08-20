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
		switch (element.value.weight) {
			case 'light':
				weight = 'font-light';
				break;
			case 'black':
				weight = 'font-black';
				break;
			case 'normal':
				weight = 'font-base';
				break;
			case 'bold':
				weight = 'font-bold';
				break;
			default:
				weight = 'font-base';
		}

		let textAlignment: string = element.value['text-alignment'] ?? '';

		const styles = [
			size,
			weight,
			textAlignment,
		]
		return styles.join(' ');
	})
</script>

<template>
	<component
		:is="element.type"
		:class="computedStyles"
		class="relative group"
		:key="element.id"
	>
		{{ element.content }}
		<button
			class="bg-red-600 top-0 left-0 p-1 rounded-md text-white text-xs absolute hidden group-hover:absolute group-hover:block"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="currentColor"
				class="w-4 h-4"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
				/>
			</svg>
		</button>
	</component>
</template>

