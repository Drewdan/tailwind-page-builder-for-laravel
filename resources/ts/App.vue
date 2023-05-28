<script setup lang="ts">
	import {onMounted, ref} from 'vue';
	import PageElement from "./components/PageElement.vue";
	import ContainerElement from "./components/ContainerElement.vue";
	import ElementContainerInterface from "./contracts/element-container-interface";
	import ElementItem from "./components/ElementItem.vue";
	import ElementConfiguration from "./components/config-areas/ElementConfiguration.vue";
	import ContainerConfiguration from "./components/config-areas/ContainerConfiguration.vue";

	const selectedContainer = ref<ElementContainerInterface | null>(null);
	const containers = ref<ElementContainerInterface[]>([]);
	const selectedElement = ref<any | null>(null);

	// TODO: this doesn't need to be a ref
	const items = ref<any[]>([
		{
			id: 1,
			type: 'h1',
			name: 'Heading',
			description: 'Use this element to create a heading',
			classes: 'text-2xl font-bold',
			size: '4xl',
			weight: 'bold',
			content: 'Some heading',
		},
		{
			id: 2,
			type: 'p',
			name: 'Paragraph',
			description: 'Use this element to create a paragraph',
			size: 'md',
			weight: 'normal',
			content: 'Some paragraph',
		},
	]);

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

	const savePage = () => {
		localStorage.setItem('page', JSON.stringify(containers.value));
	}

	const clearAll = () => {
		localStorage.removeItem('page');
		containers.value = [];
	}

	onMounted(() => {
		const page = localStorage.getItem('page');
		if (page) {
			containers.value = JSON.parse(page);
		}

		window.addEventListener('keypress', (e) => {
			if (e.ctrlKey && e.key === 's') {
				e.preventDefault();
				savePage();
			}
		})
	})


</script>

<template>
	<div class="grid grid-cols-5 min-h-screen">
		<div class="col-span-1 bg-gray-100 flex flex-col">
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
				<summary class="bg-gray-200 p-4 border-b cursor-pointer">Components</summary>
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
			/>
		</div>

		<div
			class="col-span-4 grid grid-cols-4 gap-4 p-5 content-start"
		>
			<ContainerElement
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
</template>
