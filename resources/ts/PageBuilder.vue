<script setup lang="ts">
	import {computed, onBeforeMount, ref, watch} from 'vue';
	import ApiClient from "./services/api-client";
	import {Page, PageElement} from "./types/page";
	import {builder, getConfigurationComponentsFor, templates} from "./services/element-templates";
	import AccordionItem from "./common/AccordionItem.vue";
	import Icon from "./common/Icon.vue";
	import TextInput from "./components/common/TextInput.vue";
	import TextareaInput from "./components/common/TextareaInput.vue";
	import ElementTreeEntry from "./components/ElementTreeEntry.vue";
	import ElementRenderer from "./components/ElementRenderer.vue";
	import {useRoute} from "vue-router";

	const route = useRoute();
	const client = new ApiClient();

	const page = ref<Page>({
		id: 0,
		uuid: '',
		slug: '',
		label: '',
		meta_description: '',
		meta_keywords: '',
		allowedChildren: [],
		head: {},
		body: [],
		foot: {},
	});
	const selectedElement = ref<PageElement | null>(null);

	const addToPage = (e: DragEvent, item: string) => {
		e.dataTransfer!.dropEffect = 'move'
		e.dataTransfer!.effectAllowed = 'move'
		e.dataTransfer!.setData('item', item);
	}

	const walkElements = (elements: PageElement[], callback: (element: PageElement) => void) => {
		elements.forEach((element) => {
			callback(element);
			if (element.elements) {
				walkElements(element.elements, callback);
			}
		});
	}

	const selectElement = (element: PageElement) => {
		selectedElement.value = element;
	}

	const deleteElement = (element: PageElement) => {
		/**
		 * TODO: Add a confirmation modal here to prevent accidental deletions
		 */


		// if the selected item is the same item, change the selected item to null
		if (selectedElement.value?.uuid === element.uuid) {
			selectedElement.value = null;
		}

		// check to see if its top level and delete it if it is
		if (page.value) {
			page.value.body = page.value.body.filter((e: PageElement) => e.uuid !== element.uuid);
			walkElements(page.value.body, (el) => {
				if (el.elements) {
					el.elements = el.elements.filter((e: PageElement) => e.uuid !== element.uuid);
				}
			});
		}
	}

	const loadPage = async (uuid: string) => {
		/**
		 * If there is data in local storage, we will load this because this indicates, changes were made
		 * but they were not saved
		 */

		const pageData = localStorage.getItem(`page:${uuid}`);

		if (pageData) {
			page.value = JSON.parse(pageData);
			return;
		}

		page.value = await client.loadPage(uuid);
	}

	const save = async () => {
		try {
			await client.savePage(page.value);

			/**
			 * If the save was successful, we should clear the local storage
			 */

			localStorage.removeItem(`page:${page.value.uuid}`);
			localStorage.removeItem(`page-history:${page.value.uuid}`);
		} catch (e) {
			console.error(e);
		}

		// then we clear the local storage as everything is saved
	}

	onBeforeMount(async () => {
		await loadPage(route.params.uuid as string);
	});

	/**
	 * Deeply watch the page value and when it changes, we should store
	 * it in local storage to prevent data loss when the page changes, we should
	 * also store the the previous 5 states of the page to allow for undo/redo
	 */

	watch(page, (newPage, oldPage) => {
		if (newPage) {
			localStorage.setItem(`page:${newPage.uuid}`, JSON.stringify(newPage));
		}

		// store the previous 5 states of the page
		const pageHistory = JSON.parse(localStorage.getItem(`page-history:${newPage.uuid}`) ?? '[]');

		pageHistory.push(newPage);

		if (pageHistory.length > 5) {
			pageHistory.shift();
		}

		localStorage.setItem(`page-history:${newPage.uuid}`, JSON.stringify(pageHistory));

	}, {deep: true});


	const onDrop = (e: DragEvent) => {
		e.preventDefault();
		const functionName = e.dataTransfer!.getData('item');

		const newElement = builder[functionName]();

		/**
		 * TODO: Make sure this drop zone is allowed for this element type
		 */

		const currentElements = page.value.body ?? [];

		newElement.order = currentElements.length + 1;

		page.value.body = [
			...currentElements,
			newElement
		];
	}

	const orderedBodyElements = computed(() => {
		return page.value?.body?.sort((a: PageElement, b: PageElement) => a.order - b.order) ?? [];
	});

	const availableConfigurationComponents = computed(() => {
		return getConfigurationComponentsFor(selectedElement.value?.as ?? '');
	});


</script>

<template>
	<div class="grid grid-cols-5 min-h-screen">
		<div class="col-span-1 flex flex-col h-screen overflow-auto border-r">
			<div
				class="p-2 bg-gradient-to-r from-gray-200 to-gray-300 text-gray-900"
			>
				Actions
			</div>
			<div class="flex gap-1 p-1">
				<button
					class="bg-gray-200 hover:bg-gray-100 text-black border border-black p-2 w-8 h-8"
					title="Save Page"
					@click="save"
				>
					<Icon icon="save" class="text-gray-800"/>
				</button>
			</div>

			<AccordionItem title="Page Properties">
				<div class="flex flex-col gap-2 p-2">
					<TextInput title="Page Slug" v-model="page.slug"/>
					<TextInput title="Page Label" v-model="page.label"/>
					<TextareaInput title="Meta Description" v-model="page.meta_description"/>
					<TextareaInput title="Meta Keywords" v-model="page.meta_keywords"/>
				</div>
			</AccordionItem>

			<template
				v-for="(template, key) in templates"
			>
				<AccordionItem :title="key as string">
					<div class="flex flex-col gap-3 p-3 bg-white">
						<template
							v-for="(element, key) in template"
							:key="key"
						>
							<div
								class="relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-white px-3 py-2.5 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400"
								draggable="true"
								@dragstart="addToPage($event, element.function)"
							>
								<div class="min-w-0 flex-1">
									<div class="focus:outline-none">
										<span class="absolute inset-0" aria-hidden="true"></span>
										<p class="text-sm font-medium text-gray-900">{{ element.label }}</p>
										<p class="truncate text-sm text-gray-500">{{ element.description }}</p>
									</div>
								</div>
							</div>
						</template>
					</div>
				</AccordionItem>
			</template>

		</div>

		<div class="col-span-3 overflow-auto h-screen"
		     @dragover.prevent
		     @dragenter.prevent
		     @drop="onDrop"
		>
			<div class="grid grid-cols-4 gap-4 p-5 content-start">
				<template
					v-if="page"
					v-for="container in page.body"
					:key="container.uuid"
				>
					<ElementRenderer
						:show-outlines="true"
						:element="container"
					/>
				</template>
			</div>
		</div>

		<div class="border-l">
			<div class="grid grid-rows-2 grid-cols-1 h-screen">
				<div class="overflow-auto">
					<div class="p-2 bg-gradient-to-r from-gray-200 to-gray-300 text-gray-900">
						Element Explorer
					</div>
					<template
						v-for="element in orderedBodyElements"
						:key="element.uuid"
					>
						<ElementTreeEntry
							:depth="0"
							:element="element"
							@selected-element="selectElement"
							@delete-element="deleteElement"
						/>
					</template>
				</div>


				<div class="overflow-auto">
					<div
						v-if="selectedElement"
						class="p-2 bg-gradient-to-r from-gray-200 to-gray-300 text-gray-900"
					>
						Element Properties
					</div>
					<template

						v-for="configurationComponent in availableConfigurationComponents"
					>
						<component
							:is="configurationComponent"
							v-model="selectedElement"
						/>
					</template>
				</div>

			</div>
		</div>

	</div>
</template>
