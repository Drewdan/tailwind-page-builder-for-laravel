<script setup lang="ts">

	import {SelectOptions} from "../../types/type";

	const props = defineProps<{
		title: string,
		options: SelectOptions[],
		canBeEmpty: Boolean
	}>();

	const model = defineModel();
</script>

<template>
<div class="flex flex-col gap-1">
		<label class="text-sm font-bold">
			{{ props.title }}
		</label>
		<select
			v-model="model"
			class="text-sm border border-gray-300 rounded p-1 w-full"
		>
			<option
				v-if="props.canBeEmpty"
				value=""
			>

			</option>
			<option
				v-for="option in props.options"
				:value="option.value"
				:key="option.value"
			>
				{{ option.label }}
			</option>
		</select>
	</div>
</template>

<style scoped>

</style>
