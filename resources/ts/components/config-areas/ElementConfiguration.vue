<script setup lang="ts">

	const props = defineProps<{
		modelValue: any,
	}>();

	defineEmits(['update:modelValue']);
</script>

<template>
	<details
	>
		<summary
			class="bg-gray-200 p-4 border-b cursor-pointer"
		>
			Element Configuration
		</summary>
		<div class="flex flex-col gap-3 p-3 bg-white">
			<div class="flex flex-col gap-1">
				<label>Text Size</label>
				<select
					v-model="props.modelValue.size"
					class="border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"
				>
					<option value="xs">Extra Small</option>
					<option value="sm">Small</option>
					<option value="md">Medium</option>
					<option value="lg">Large</option>
					<option value="xl">Extra Large</option>
					<option value="2xl">2x Extra Large</option>
					<option value="3xl">3x Extra Large</option>
					<option value="4xl">4x Extra Large</option>
				</select>
			</div>
			<div class="flex flex-col gap-1">
				<label>Font Weight</label>
				<select
					v-model="props.modelValue.weight"
					class="border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"
				>
					<option value="normal">Normal</option>
					<option value="bold">Bold</option>
				</select>
			</div>
			<div class="flex flex-col gap-1">
				<label>Content</label>
				<textarea
					v-model="props.modelValue.content"
					class="border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"
				/>
			</div>
			<button
				class="border bg-red-600 text-white rounded-md p-2 col-span-4"
			>
				Delete Element
			</button>
		</div>
	</details>
</template>

<style scoped>

</style>
