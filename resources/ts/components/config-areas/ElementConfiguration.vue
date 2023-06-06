<script setup lang="ts">
	import {ref} from "vue";
	import Uploader from "../../services/uploader";
	import ApiClient from "../../services/api-client";

	const client = new ApiClient();

	const props = defineProps<{
		modelValue: any,
	}>();

	defineEmits(['update:modelValue']);

	const fileSelection = ref<HTMLInputElement|null>(null);

	const selectFile = () => {
		if (fileSelection.value && "click" in fileSelection.value) {
			fileSelection.value!.click();
		}
	}

	const uploadFile = (e: Event) => {
		Uploader.store((e.target as any).files[0], {
			progress: progress => {
				//this.uploadProgress = Math.round(progress * 100);
			}
		}).then(async response => {
			props.modelValue.src = await client.storeFile(response.uuid, response.key, response.bucket);
		});
	}

</script>

<template>
	<details
	>
		<summary
			class="bg-gray-200 p-4 border-b cursor-pointer"
		>
			Element Configuration
		</summary>
		<div
			v-if="props.modelValue.type === 'img'"
			class="flex flex-col gap-3 p-3 bg-white"
		>
			<div class="flex flex-col gap-1">
				<label>File</label>
				<input
					type="text"
					v-model="props.modelValue.src"
					class="border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm text-xs"
				/>
				<input
					@change="uploadFile"
					ref="fileSelection"
					type="file"
					class="hidden"
				/>
				<button
					@click="selectFile()"
					class="border bg-blue-600 hover:bg-blue-700 text-white rounded-md p-2 col-span-4"
				>
					Upload File
				</button>
			</div>
			<div class="flex flex-col gap-1">
				<label>Alt Tag</label>
				<input
					type="text"
					v-model="props.modelValue.alt"
					class="border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm text-xs"
				/>
			</div>
		</div>
		<div
			v-else
			class="flex flex-col gap-3 p-3 bg-white"
		>
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
