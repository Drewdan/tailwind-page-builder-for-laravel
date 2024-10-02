<script setup lang="ts">

	// declare the emits
	import {PageElement} from "../types/page";
	import Icon from "../common/Icon.vue";

	const emit = defineEmits<{
		(event: 'selectedElement', element: PageElement): void;
		(event: 'deleteElement', element: PageElement): void;
	}>();

	// emit the selected element to the parent component
	const emitSelectedElement = (element: PageElement) => {
		emit('selectedElement', element);
	};

	const emitDeleteElement = (element: PageElement) => {
		emit('deleteElement', element);
	}

	// Map to store original borders for each element by uuid
	const originalBorders = new Map<string, string>();

	const handleHoverOnElement = (element: PageElement) => {
		const htmlElement = document.querySelector(`[data-uuid="${element.uuid}"]`) as HTMLElement;

		if (!htmlElement || originalBorders.has(element.uuid)) {
			return; // Do nothing if element not found or border already tracked
		}

		// Track and store the original border of the element
		originalBorders.set(element.uuid, htmlElement.style.border);

		// Add an outline to the element
		htmlElement.style.border = '1px solid red';
	};

	const handleHoverOffElement = (element: PageElement) => {
		const htmlElement = document.querySelector(`[data-uuid="${element.uuid}"]`) as HTMLElement;

		if (!htmlElement || !originalBorders.has(element.uuid)) {
			return; // Do nothing if element or original border not found
		}

		// Restore the original border of the element
		htmlElement.style.border = originalBorders.get(element.uuid) || '';

		// Remove the border from the map
		originalBorders.delete(element.uuid);
	};

	defineProps<{
		element: PageElement;
		depth: number;
	}>();
</script>

<template>
	<div
		@click="emitSelectedElement(element)"
		@mouseover="handleHoverOnElement(element)"
		@mouseleave="handleHoverOffElement(element)"
		class="p-2 relative z-5 shrink-0 w-full bg-gradient-to-r cursor-pointer from-gray-50 to-gray-200 border-b border-gray-300 h-8 flex items-stretch justify-between"
	>
		<p class="self-center truncate">
			{{ ' > '.repeat(depth) }}
			{{ element.as }}: {{ element.id }}
		</p>
		<button
			type="button"
			class="flex items-center justify-center z-10 relative p-2 hover:bg-gray-50"
			@click="emitDeleteElement(element)"
		>
			<Icon icon="trash" class="w-3 h-3 text-gray-500 transition-transform"/>
		</button>
	</div>
	<template
		v-if="element.elements?.length > 0"
		v-for="child in element.elements"
		:key="child.id"
	>
		<ElementTreeEntry
			@selected-element="emitSelectedElement"
			@delete-element="emitDeleteElement"
			:element="child"
			:depth="depth + 1"
		/>
	</template>
</template>

<style scoped>
	/* Your styles */
</style>
