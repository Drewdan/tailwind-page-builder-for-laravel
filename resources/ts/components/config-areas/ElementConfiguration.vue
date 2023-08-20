<script setup lang="ts">
	import {computed} from "vue";
	import ApiClient from "../../services/api-client";
	import TextElementContract from "../../types/text-element";
	import SelectOption from "../element-options/SelectOption.vue";
	import UploadOption from "../element-options/UploadOption.vue";
	import TextOption from "../element-options/TextOption.vue";
	import ContentOption from "../element-options/ContentOption.vue";

	const client = new ApiClient();

	const props = defineProps<{
		modelValue: any,
		elements: TextElementContract[];
	}>();

	defineEmits(['update:modelValue']);

	const baseElement = computed(() => {
		return props.elements.find((x) => x.id === props.modelValue.id);
	});

	const optionMap: Record<string, typeof SelectOption | typeof UploadOption | typeof TextOption | typeof ContentOption> = {
		'select': SelectOption,
		'upload': UploadOption,
		'text': TextOption,
		'content': ContentOption
	}

	const getComponent = (option: string) => {
		return optionMap[option];
	}


</script>

<template>
	<details
	>
		<summary
			class="font-bold p-4 border-b cursor-pointer"
		>
			Element Configuration
		</summary>
		<div
			class="flex flex-col gap-3 p-3"
		>
			<component
				v-for="(value, key) in baseElement!.options"
				:is="getComponent(value.type as string)"
				:key="key"
				:title="value.title"
				:options="value"
				v-model="props.modelValue[key]"
			/>
		</div>
	</details>
</template>

<style scoped>

</style>
