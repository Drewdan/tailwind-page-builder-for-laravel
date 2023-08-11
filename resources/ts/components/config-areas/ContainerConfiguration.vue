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
			class="font-bold p-4 border-b cursor-pointer"
		>
			Container Configuration
		</summary>
		<div class="flex flex-col gap-3 p-3 bg-white">
			<div class="flex flex-col gap-1">
				<label>Span</label>
				<input
					v-model="props.modelValue.colSpan"
					type="number"
					class="border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"
					max="4"
					min="1"
				/>
			</div>
			<div class="flex flex-col gap-1">
				<label>Text Align</label>
				<select
					v-model="props.modelValue.textAlign"
					class="border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"
				>
					<option value="text-left">Left</option>
					<option value="text-center">Center</option>
					<option value="text-right">Right</option>
					<option value="text-justify">Justify</option>
				</select>
			</div>
			<button
				class="border bg-red-600 text-white rounded-md p-2 col-span-4"
			>
				Delete Container
			</button>
		</div>
	</details>
</template>

<style scoped>

</style>
