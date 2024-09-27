<script setup lang="ts">

	import {PageElement} from "../../types/page";
	import AccordionItem from "../../common/AccordionItem.vue";
	import TextareaInput from "../common/TextareaInput.vue";

	const model = defineModel<PageElement>();
</script>

<template>
	<AccordionItem title="Content">
		<div class="flex flex-col gap-2 p-2">
			<TextareaInput title="Content" v-model="model!.content"/>
		</div>
	</AccordionItem>
</template>

<style scoped>

</style>
