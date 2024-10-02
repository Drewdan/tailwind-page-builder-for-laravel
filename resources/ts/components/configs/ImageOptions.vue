<script setup lang="ts">

	import {PageElement} from "../../types/page";
	import AccordionItem from "../../common/AccordionItem.vue";
	import TextInput from "../common/TextInput.vue";
	import FileUploaderInput from "../common/FileUploaderInput.vue";
	import ClassListSelector from "../common/ClassListSelector.vue";

	const model = defineModel<PageElement>();

	const objectFitOptions = [
		{label: 'Fill', value: 'object-fill'},
		{label: 'Contain', value: 'object-contain'},
		{label: 'Cover', value: 'object-cover'},
		{label: 'None', value: 'object-none'},
		{label: 'Scale Down', value: 'object-scale-down'},
	];

</script>

<template>
	<AccordionItem title="Image Options">
		<div class="flex flex-col gap-2 p-2">
			<FileUploaderInput title="Image Source" v-model="model!.attributes.src"/>
			<TextInput title="Image Alt" v-model="model!.attributes.alt"/>
			<ClassListSelector title="Object Fit" :options="objectFitOptions" v-model="model" :can-be-empty="true"/>
		</div>
	</AccordionItem>
</template>

<style scoped>

</style>
