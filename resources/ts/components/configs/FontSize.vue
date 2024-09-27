<script setup lang="ts">

import {PageElement} from "../../types/page";
import AccordionItem from "../../common/AccordionItem.vue";
import ClassListSelector from "../common/ClassListSelector.vue";

const model = defineModel<PageElement>();

const fontSizeOptions = [
  { label: 'XS (12px)', value: 'text-xs' },
  { label: 'SM (14px)', value: 'text-sm' },
  { label: 'Base (16px)', value: 'text-base' },
  { label: 'LG (18px)', value: 'text-lg' },
  { label: 'XL (20px)', value: 'text-xl' },
  { label: '2XL (24px)', value: 'text-2xl' },
  { label: '3XL (30px)', value: 'text-3xl' },
  { label: '4XL (36px)', value: 'text-4xl' },
  { label: '5XL (48px)', value: 'text-5xl' },
  { label: '6XL (60px)', value: 'text-6xl' },
  { label: '7XL (72px)', value: 'text-7xl' },
  { label: '8XL (96px)', value: 'text-8xl' },
  { label: '9XL (128px)', value: 'text-9xl' }
];


</script>

<template>
	<AccordionItem title="Font Size">
		<div class="flex flex-col gap-2 p-2">
			<ClassListSelector title="Font Size" :options="fontSizeOptions" :can-be-empty="true" v-model="model"/>
		</div>
	</AccordionItem>
</template>

<style scoped>

</style>
