<script setup lang="ts">

	const props = defineProps<{
		modelValue: any,
		options: any,
		title: string,
	}>();

	defineEmits(['update:modelValue']);

</script>

<template>
	<div class="flex flex-col gap-1">
		<label class="text-sm font-bold">
			{{ props.title }}
		</label>
		<input
			type="text"
			:value="props.modelValue"
			@input="$emit('update:modelValue', ($event.target as HTMLSelectElement).value)"
			class="border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm text-xs"
		/>
	</div>
</template>

<style scoped>

</style>
