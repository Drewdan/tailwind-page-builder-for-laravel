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
		<select
			:value="props.modelValue"
			@input="$emit('update:modelValue', ($event.target as HTMLSelectElement).value)"
			class="text-sm border border-gray-300 rounded p-1 w-full"
		>
			<option
				v-for="(option, key) in props.options.options"
				:value="option.value"
				:key="key"
			>
				{{ option.label }}
			</option>
		</select>
	</div>
</template>

<style scoped>

</style>
