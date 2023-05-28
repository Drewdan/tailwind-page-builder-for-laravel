<script setup lang="ts">

	import {computed} from "vue";

	const props = defineProps<{
		element: any,
	}>();

	const computedStyles = computed(() => {
		let size: string;
		switch (props.element.size) {
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
				size = 'text-sm';
		}

		let weight: string;
		switch (props.element.size) {
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
		:is="props.element.type"
		:class="computedStyles"
		:key="props.element.id"
		v-html="props.element.content"
	/>
</template>

<style scoped>

</style>
