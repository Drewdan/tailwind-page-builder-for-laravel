<script setup lang="ts">

	import {computed} from "vue";
	import ElementItem from "./elements/ElementItem.vue";
	import ImageElement from "./elements/ImageElement.vue";

	const props = defineProps<{
		container: any,
	}>();

	const computedStyles = computed(() => {
		let span: string;
		switch (props.container.colSpan) {
			case 1:
				span = 'col-span-1';
				break;
			case 2:
				span = 'col-span-2';
				break;
			case 3:
				span = 'col-span-3';
				break;
			case 4:
				span = 'col-span-4';
				break;
			default:
				span = 'col-span-4';
		}

		const styles = [
			span,
			props.container.textAlign,
			'p-5'
		]
		return `${props.container.classes} ${styles.join(' ')}`;
	})

</script>
<template>
	<div
		:key="props.container.id"
		:class="computedStyles"
	>
		<component
			v-for="item in props.container.elements"
			:is="item.type === 'img' ? ImageElement : ElementItem"
			@click="$emit('selectElement', item)"
			:element="item"
		/>
	</div>
</template>
