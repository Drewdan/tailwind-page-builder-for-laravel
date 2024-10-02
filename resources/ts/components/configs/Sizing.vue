<script setup lang="ts">


	import {PageElement} from "../../types/page";
	import AccordionItem from "../../common/AccordionItem.vue";
	import ClassListSelector from "../common/ClassListSelector.vue";

	const model = defineModel<PageElement>();

	const widthOptions = [
		{label: '0', value: 'w-0'},
		{label: 'Px', value: 'w-px'},
		{label: '0.5 (2px)', value: 'w-0.5'},
		{label: '1 (4px)', value: 'w-1'},
		{label: '1.5 (6px)', value: 'w-1.5'},
		{label: '2 (8px)', value: 'w-2'},
		{label: '2.5 (10px)', value: 'w-2.5'},
		{label: '3 (12px)', value: 'w-3'},
		{label: '3.5 (14px)', value: 'w-3.5'},
		{label: '4 (16px)', value: 'w-4'},
		{label: '5 (20px)', value: 'w-5'},
		{label: '6 (24px)', value: 'w-6'},
		{label: '7 (28px)', value: 'w-7'},
		{label: '8 (32px)', value: 'w-8'},
		{label: '9 (36px)', value: 'w-9'},
		{label: '10 (40px)', value: 'w-10'},
		{label: '11 (44px)', value: 'w-11'},
		{label: '12 (48px)', value: 'w-12'},
		{label: '14 (56px)', value: 'w-14'},
		{label: '16 (64px)', value: 'w-16'},
		{label: '20 (80px)', value: 'w-20'},
		{label: '24 (96px)', value: 'w-24'},
		{label: '28 (112px)', value: 'w-28'},
		{label: '32 (128px)', value: 'w-32'},
		{label: '36 (144px)', value: 'w-36'},
		{label: '40 (160px)', value: 'w-40'},
		{label: '44 (176px)', value: 'w-44'},
		{label: '48 (192px)', value: 'w-48'},
		{label: '52 (208px)', value: 'w-52'},
		{label: '56 (224px)', value: 'w-56'},
		{label: '60 (240px)', value: 'w-60'},
		{label: '64 (256px)', value: 'w-64'},
		{label: '72 (288px)', value: 'w-72'},
		{label: '80 (320px)', value: 'w-80'},
		{label: '96 (384px)', value: 'w-96'},
		{label: 'Auto', value: 'w-auto'},
		{label: '1/2', value: 'w-1/2'},
		{label: '1/3', value: 'w-1/3'},
		{label: '2/3', value: 'w-2/3'},
		{label: '1/4', value: 'w-1/4'},
		{label: '2/4', value: 'w-2/4'},
		{label: '3/4', value: 'w-3/4'},
		{label: '1/5', value: 'w-1/5'},
		{label: '2/5', value: 'w-2/5'},
		{label: '3/5', value: 'w-3/5'},
		{label: '4/5', value: 'w-4/5'},
		{label: '1/6', value: 'w-1/6'},
		{label: '2/6', value: 'w-2/6'},
		{label: '3/6', value: 'w-3/6'},
		{label: '4/6', value: 'w-4/6'},
		{label: '5/6', value: 'w-5/6'},
		{label: '1/12', value: 'w-1/12'},
		{label: '2/12', value: 'w-2/12'},
		{label: '3/12', value: 'w-3/12'},
		{label: '4/12', value: 'w-4/12'},
		{label: '5/12', value: 'w-5/12'},
		{label: '6/12', value: 'w-6/12'},
		{label: '7/12', value: 'w-7/12'},
		{label: '8/12', value: 'w-8/12'},
		{label: '9/12', value: 'w-9/12'},
		{label: '10/12', value: 'w-10/12'},
		{label: '11/12', value: 'w-11/12'},
		{label: 'Full', value: 'w-full'},
		{label: 'Screen', value: 'w-screen'},
		{label: 'SVW', value: 'w-svw'},
		{label: 'LVW', value: 'w-lvw'},
		{label: 'DVW', value: 'w-dvw'},
		{label: 'Min Content', value: 'w-min'},
		{label: 'Max Content', value: 'w-max'},
		{label: 'Fit Content', value: 'w-fit'}
	];


	const heightOptions = [
		{label: '0', value: 'h-0'},
		{label: 'Px', value: 'h-px'},
		{label: '0.5 (2px)', value: 'h-0.5'},
		{label: '1 (4px)', value: 'h-1'},
		{label: '1.5 (6px)', value: 'h-1.5'},
		{label: '2 (8px)', value: 'h-2'},
		{label: '2.5 (10px)', value: 'h-2.5'},
		{label: '3 (12px)', value: 'h-3'},
		{label: '3.5 (14px)', value: 'h-3.5'},
		{label: '4 (16px)', value: 'h-4'},
		{label: '5 (20px)', value: 'h-5'},
		{label: '6 (24px)', value: 'h-6'},
		{label: '7 (28px)', value: 'h-7'},
		{label: '8 (32px)', value: 'h-8'},
		{label: '9 (36px)', value: 'h-9'},
		{label: '10 (40px)', value: 'h-10'},
		{label: '11 (44px)', value: 'h-11'},
		{label: '12 (48px)', value: 'h-12'},
		{label: '14 (56px)', value: 'h-14'},
		{label: '16 (64px)', value: 'h-16'},
		{label: '20 (80px)', value: 'h-20'},
		{label: '24 (96px)', value: 'h-24'},
		{label: '28 (112px)', value: 'h-28'},
		{label: '32 (128px)', value: 'h-32'},
		{label: '36 (144px)', value: 'h-36'},
		{label: '40 (160px)', value: 'h-40'},
		{label: '44 (176px)', value: 'h-44'},
		{label: '48 (192px)', value: 'h-48'},
		{label: '52 (208px)', value: 'h-52'},
		{label: '56 (224px)', value: 'h-56'},
		{label: '60 (240px)', value: 'h-60'},
		{label: '64 (256px)', value: 'h-64'},
		{label: '72 (288px)', value: 'h-72'},
		{label: '80 (320px)', value: 'h-80'},
		{label: '96 (384px)', value: 'h-96'},
		{label: 'Auto', value: 'h-auto'},
		{label: '1/2', value: 'h-1/2'},
		{label: '1/3', value: 'h-1/3'},
		{label: '2/3', value: 'h-2/3'},
		{label: '1/4', value: 'h-1/4'},
		{label: '2/4', value: 'h-2/4'},
		{label: '3/4', value: 'h-3/4'},
		{label: '1/5', value: 'h-1/5'},
		{label: '2/5', value: 'h-2/5'},
		{label: '3/5', value: 'h-3/5'},
		{label: '4/5', value: 'h-4/5'},
		{label: '1/6', value: 'h-1/6'},
		{label: '2/6', value: 'h-2/6'},
		{label: '3/6', value: 'h-3/6'},
		{label: '4/6', value: 'h-4/6'},
		{label: '5/6', value: 'h-5/6'},
		{label: 'Full', value: 'h-full'},
		{label: 'Screen', value: 'h-screen'},
		{label: 'SVH', value: 'h-svh'},
		{label: 'LVH', value: 'h-lvh'},
		{label: 'DVH', value: 'h-dvh'},
		{label: 'Min Content', value: 'h-min'},
		{label: 'Max Content', value: 'h-max'},
		{label: 'Fit Content', value: 'h-fit'}
	];


</script>

<template>
	<AccordionItem title="Sizing">
		<div class="flex flex-col gap-2 p-2">
			<ClassListSelector title="Width" :options="widthOptions" v-model="model" :can-be-empty="true"/>
			<ClassListSelector title="Height" :options="heightOptions" v-model="model" :can-be-empty="true"/>
		</div>
	</AccordionItem>
</template>

<style scoped>

</style>
