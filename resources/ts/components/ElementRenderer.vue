<script setup lang="ts">

	import {computed} from "vue";
	import {PageElement} from "../types/page";
	import {builder} from "../services/element-templates";

	const props = defineProps<{
		element: PageElement;
		showOutlines: boolean;
	}>();

	const onDrop = (e: DragEvent) => {
		e.preventDefault();
		e.stopPropagation();
		const functionName = e.dataTransfer!.getData('item');

		const newElement = builder[functionName]();

		/**
		 * TODO: Make sure this drop zone is allowed for this element type
		 */

		const currentElements = props.element.elements ?? [];

		props.element.elements = [
			...currentElements,
			newElement
		];

	}

	const combinedClasses = computed(() => {

		const outlines = props.showOutlines
			? [
				'p-5',
				'outline-dashed',
				'outline-1',
				'outline-blue-500/50',
			]
			: [];

		// merge the element.attributes.classes with a relative class and implode them
		return [
			'relative',
			...outlines,
			...props.element.attributes?.classes ?? []
		].join(' ');
	});

	const orderedElements = computed(() => {
		return props.element.elements?.sort((a: PageElement, b: PageElement) => a.order - b.order) ?? [];
	});

</script>

<template>
	<component
		:src="element.attributes?.src"
		:alt="element.attributes?.alt"
		:data-uuid="element.uuid"
		:key="element.uuid"
		:is="element.as"
		:id="element.id"
		:class="combinedClasses"
		@dragover.prevent
		@dragenter.prevent
		@drop="onDrop"
	>
		<template v-if="element.content">
			{{ element.content }}
		</template>
		<ElementRenderer
			v-for="child in orderedElements"
			:key="child.uuid"
			:element="child"
			:show-outlines="showOutlines"
		/>
	</component>
</template>

<style scoped>

</style>
