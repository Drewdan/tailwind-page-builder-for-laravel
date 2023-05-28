<script setup lang="ts">

import {computed} from "vue";

const item = defineProps<{
	item: any,
}>();

const computedStyles = computed(() => {
	const styles = [
		`row-start-${item.item.rowStart}`,
		`row-span-${item.item.rowSpan}`,
		`col-start-${item.item.colStart}`,
		`col-span-${item.item.colSpan}`,
	]
	return `${item.item.classes} ${styles.join(' ')}`;
})

</script>
<template>
	<div
		:key="item.item.id"
		:class="computedStyles"
	>
	</div>
</template>
