<script setup lang="ts">
	import {ref} from "vue";
	import Icon from "./Icon.vue";

	defineProps<{
		title: string;
	}>();
	const isExpanded = ref(false);

</script>

<template>
	<div
		class="shrink-0 w-full bg-gradient-to-r cursor-pointer from-gray-50 to-gray-200 border-b border-gray-300 h-8 flex items-stretch justify-between"
		@click="isExpanded = !isExpanded"
	>
		<div class="flex items-stretch overflow-hidden">
			<div class="w-8 flex items-center justify-center">
				<Icon
					icon="chevronUp"
					class="w-3 h-3 text-gray-500 transition-transform"
					:class="isExpanded ? 'rotate-180' : 'rotate-90'"
				/>
			</div>
			<p class="self-center truncate">{{ title }}</p>
		</div>
		<slot name="header-right" />
	</div>
	<div
		v-if="isExpanded"
		class="border-b border-gray-200"
	>
		<slot />
	</div>
</template>
