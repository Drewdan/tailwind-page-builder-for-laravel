<script setup lang="ts">

	defineProps<{
		title: string;
	}>();

	const model = defineModel<string>();
</script>

<template>
	<div class="flex flex-col gap-1">
		<label class="text-sm font-bold">
			{{ title }}
		</label>
		<textarea
			v-model="model"
			class="border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm text-xs"
		></textarea>
	</div>
</template>

<style scoped>

</style>
