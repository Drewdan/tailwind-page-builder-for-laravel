<script setup lang="ts">

	// Assuming your model is coming from props or a store
	import {PageElement} from "../../types/page";
	import AccordionItem from "../../common/AccordionItem.vue";
	import ClassListSelector from "../common/ClassListSelector.vue";

	const model = defineModel<PageElement>();

	const options = [
		{label: '1', value: 'col-span-1'},
		{label: '2', value: 'col-span-2'},
		{label: '3', value: 'col-span-3'},
		{label: '4', value: 'col-span-4'}
	];

</script>

<template>
	<AccordionItem title="Grid Settings">
		<div class="flex flex-col gap-2 p-2">
			<ClassListSelector
				:can-be-empty="false"
				title="Grid Col Span"
				:options="options"
				v-model="model"
			/>
		</div>
	</AccordionItem>
</template>
