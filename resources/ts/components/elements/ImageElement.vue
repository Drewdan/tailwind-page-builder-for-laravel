<script setup lang="ts">

	const props = defineProps<{
		element: any,
	}>();

</script>

<template>
	<img
		:src="props.element.src"
		:alt="props.element.alt"
		class="w-full"
	/>
</template>
