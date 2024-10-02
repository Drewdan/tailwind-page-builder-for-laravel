<script setup lang="ts">

import AccordionItem from "../../common/AccordionItem.vue";
</script>

<template>
	<AccordionItem title="Text Alignment">
		<div>
			<label for="text-alignment">Text Alignment</label>
			<select name="text-alignment" id="text-alignment">
				<option value="text-left">Left</option>
				<option value="text-center">Center</option>
				<option value="text-right">Right</option>
				<option value="text-justify">Justify</option>
			</select>
		</div>
	</AccordionItem>
</template>

<style scoped>

</style>
