<script setup lang="ts">
import {onMounted, ref} from 'vue';
import ContainerElement from "./components/ContainerElement.vue";
import ElementContainerInterface from "./contracts/element-container-interface";
import ElementConfiguration from "./components/config-areas/ElementConfiguration.vue";
import ContainerConfiguration from "./components/config-areas/ContainerConfiguration.vue";
import Page from "./types/page";
import {useRoute} from "vue-router";
import ApiClient from "./services/api-client";
import {RendererType} from "./types/renderers";
import TextElementContract from "./types/text-element";

const route = useRoute();

const client = new ApiClient();

const selectedContainer = ref<ElementContainerInterface | null>(null);
const containers = ref<ElementContainerInterface[]>([]);
const selectedElement = ref<any | null>(null);

// TODO: this doesn't need to be a ref
let items: TextElementContract[] = [];

document.addEventListener('keydown', (e) => {
	if (e.ctrlKey && e.key === 's') {
		e.preventDefault();
		savePage();
	}
})

const page = ref<Page | null>(null);

const addContainer = () => {
	const baseItem = {
		id: 0,
		classes: 'border border-gray-300',
		colSpan: 4,
		textAlign: 'text-left',
		elements: [],
	} as ElementContainerInterface;

	const item = JSON.parse(JSON.stringify(baseItem))
	item.id = containers.value.length;
	containers.value.push(item);
}

const addToPage = (e: DragEvent, item: any) => {
	e.dataTransfer!.dropEffect = 'move'
	e.dataTransfer!.effectAllowed = 'move'
	e.dataTransfer!.setData('item', JSON.stringify(item));
}

const onDrop = (e: DragEvent, container: ElementContainerInterface) => {
	e.preventDefault();
	const item = JSON.parse(e.dataTransfer!.getData('item'));
	container.elements.push({...item});
}

const selectContainer = (container: ElementContainerInterface) => {
	selectedContainer.value = container;
}

const selectElement = (element: any) => {
	selectedElement.value = element;
}

const clearAll = () => {
	localStorage.removeItem('page');
	containers.value = [];
}

const loadPage = async (slug: string) => {
	const pageData = await client.loadPage(slug);

	page.value = pageData;
	if (typeof pageData.content === 'string') {
		containers.value = JSON.parse(pageData.content) ?? [];
	} else {
		containers.value = pageData.content ?? [];
	}
}

const savePage = async () => {
	await client.savePage(page.value!.slug, page.value!.title, containers.value);
}

onMounted(async () => {
	items = await client.loadElements();
	await loadPage(route.params.slug as string);
});
</script>

<template>
	<div class="grid grid-cols-5 min-h-screen">
		<div class="col-span-1 flex flex-col h-screen overflow-auto border-r">
			<div class="flex flex-col">
				<button
					@click="clearAll"
					class="bg-red-600 hover:bg-red-500 text-white p-2 col-span-4"
				>
					Clear All
				</button>
				<button
					@click="savePage"
					class="bg-green-600 hover:bg-green-500 text-white p-2 col-span-4"
				>
					Save Page
				</button>
				<button
					@click="addContainer"
					class="bg-amber-600 hover:bg-amber-500 text-white p-2 col-span-4"
				>
					Add Container
				</button>
			</div>
			<details
				v-if="containers.length"
			>
				<summary class="font-bold p-4 border-b cursor-pointer">Components</summary>
				<div class="flex flex-col gap-3 p-3 bg-white">
					<div
						class="relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-white px-3 py-2.5 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400"
						v-for="item in items"
						draggable="true"
						:key="item.id"
						@dragstart="addToPage($event, item)"
					>
						<div class="min-w-0 flex-1">
							<a href="#" class="focus:outline-none">
								<span class="absolute inset-0" aria-hidden="true"></span>
								<p class="text-sm font-medium text-gray-900">{{ item.name }}</p>
								<p class="truncate text-sm text-gray-500"> {{ item.description }}</p>
							</a>
						</div>
					</div>
				</div>
			</details>
			<ContainerConfiguration
				v-if="selectedContainer"
				v-model="selectedContainer"
			/>
			<ElementConfiguration
				v-if="selectedElement"
				v-model="selectedElement"
				:elements="items"
			/>
		</div>

		<div class="col-span-4 overflow-auto h-screen">
			<div
				class="grid grid-cols-4 gap-4 p-5 content-start"
			>
				<ContainerElement
					:items="items"
					@click="selectContainer(container)"
					@dragover.prevent
					@dragenter.prevent
					@drop="(e) => onDrop(e, container)"
					:key="container.id"
					v-for="container in containers"
					:container="container"
					@selectElement="selectElement"
				/>
			</div>
		</div>
	</div>
</template>
