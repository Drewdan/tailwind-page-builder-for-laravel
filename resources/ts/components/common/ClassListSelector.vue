<script setup lang="ts">


	import {SelectOptions} from "../../types/type";
	import {PageElement} from "../../types/page";
	import {computed} from "vue";
	import SelectInput from "./SelectInput.vue";

	const props = defineProps<{
		title: string,
		options: SelectOptions[],
		canBeEmpty: boolean
	}>();
	const model = defineModel<PageElement>();

	const currentClass = computed({
		get() {
			const classList = model!.value!.attributes?.classes ?? [];
			// Find is any of the classes in the class list match one of the available option values
			const colSpanClasses = classList.filter((className: string) => props.options.some(option => option.value === className));

			// if there is more than one, something went wrong so we throw something in the console so we know
			if (colSpanClasses.length > 1) {
				console.error('More than one class found in model.attributes.classes', colSpanClasses);
			}

			// if we have an option return it, otherwise we will return the first option or an empty string depending on
			// if the canBeEmpty prop is set
			return colSpanClasses.length > 0 ? colSpanClasses[0] : props.canBeEmpty ? '' : props.options[0].value;
		},
		set(newSpan) {
			if (!model.value!.attributes?.classes) {
				model!.value!.attributes.classes = [];
			}

			// filter out any options which are availalbe in the options list
			// this is to ensure that only one col-span-* class exists in the model
			model!.value!.attributes.classes = model!.value!.attributes.classes.filter(
				(className: string) => !props.options.some(option => option.value === className)
			);

			// if classes is not defined, create an empty array
			model!.value!.attributes.classes.push(newSpan);
		}

	});

</script>

<template>
	<SelectInput
		:canBeEmpty="props.canBeEmpty"
		v-model="currentClass"
		:options="props.options"
		:title="props.title"
	/>
</template>

<style scoped></style>
