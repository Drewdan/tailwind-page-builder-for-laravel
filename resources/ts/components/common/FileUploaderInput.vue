<script setup lang="ts">

	import ApiClient from "../../services/api-client";
	import {ref} from "vue";
	import Uploader from "../../services/uploader";

	const client = new ApiClient();

	const model = defineModel();

	const props = defineProps<{
		title: string,
	}>();


	const fileSelection = ref<HTMLInputElement | null>(null);
	const uploadProgress = ref<number>(0);

	const selectFile = () => {
		if (fileSelection.value && "click" in fileSelection.value) {
			fileSelection.value!.click();
		}
	}

	const uploadFile = async (e: Event) => {
		const response = await Uploader.store((e.target as any).files[0], {
			progress: progress => {
				uploadProgress.value = Math.round(progress * 100);
			}
		})

		model.value = await client.storeFile(response.uuid, response.key, response.bucket);
	}

</script>

<template>
	<div class="flex flex-col gap-1">
		<label class="text-sm font-bold">
			{{ props.title }}
		</label>
		<input
			type="text"
			:value="model"
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
			class="border bg-blue-600 hover:bg-blue-700 text-white rounded-md py-1 text-xs col-span-4"
		>
			Upload File
		</button>
	</div>
</template>

<style scoped>

</style>
