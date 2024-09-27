<script setup lang="ts">

	import {PageElement} from "../../types/page";
	import AccordionItem from "../../common/AccordionItem.vue";
	import TextInput from "../common/TextInput.vue";

	const model = defineModel<PageElement>();
</script>

<template>
	<AccordionItem title="General Properties">
		<div class="flex flex-col gap-2 p-2">
			<TextInput title="Element ID" v-model="model!.id" />
			<TextInput title="Element UUID" v-model="model!.uuid" />
			<TextInput title="Sort Order" v-model="model!.order" />
		</div>
	</AccordionItem>
</template>

<style scoped>

</style>
