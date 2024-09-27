<script setup lang="ts">

	import {PageElement} from "../../types/page";
	import AccordionItem from "../../common/AccordionItem.vue";
	import ClassListSelector from "../common/ClassListSelector.vue";

	const model = defineModel<PageElement>();

	const gapOptions = [
		{label: '0px', value: 'gap-0'},
		{label: '1px', value: 'gap-px'},
		{label: '2px', value: 'gap-0.5'},
		{label: '4px', value: 'gap-1'},
		{label: '6px', value: 'gap-1.5'},
		{label: '8px', value: 'gap-2'},
		{label: '10px', value: 'gap-2.5'},
		{label: '12px', value: 'gap-3'},
		{label: '14px', value: 'gap-3.5'},
		{label: '16px', value: 'gap-4'},
		{label: '20px', value: 'gap-5'},
		{label: '24px', value: 'gap-6'},
		{label: '28px', value: 'gap-7'},
		{label: '32px', value: 'gap-8'},
		{label: '36px', value: 'gap-9'},
		{label: '40px', value: 'gap-10'},
		{label: '44px', value: 'gap-11'},
		{label: '48px', value: 'gap-12'},
		{label: '56px', value: 'gap-14'},
		{label: '64px', value: 'gap-16'},
		{label: '80px', value: 'gap-20'},
		{label: '96px', value: 'gap-24'},
		{label: '112px', value: 'gap-28'},
		{label: '128px', value: 'gap-32'},
		{label: '144px', value: 'gap-36'},
		{label: '160px', value: 'gap-40'},
		{label: '176px', value: 'gap-44'},
		{label: '192px', value: 'gap-48'},
		{label: '208px', value: 'gap-52'},
		{label: '224px', value: 'gap-56'},
		{label: '240px', value: 'gap-60'},
		{label: '256px', value: 'gap-64'},
		{label: '288px', value: 'gap-72'},
		{label: '320px', value: 'gap-80'},
		{label: '384px', value: 'gap-96'}
	];


</script>

<template>
	<AccordionItem title="Flex Settings">
		<div class="flex flex-col gap-2 p-2">
			<ClassListSelector title="Gap" :options="gapOptions" :can-be-empty="true" v-model="model"/>
		</div>
	</AccordionItem>
</template>

<style scoped>

</style>
