<script setup lang="ts">
import axios from "axios";
import {onMounted, ref} from "vue";
import Modal from "./components/common/Modal.vue";
import Page from "./types/page";

let title = ref('');
let pages = ref<Array<Page>>([]);
let createModalOpen = ref(false);

const getAllPageData = () => {
  // TODO: Make async
  axios.get(`/page-builder/data/pages`).then((response) => {
    pages.value = response.data.pages;
  }).catch(() => {
    console.log('Error getting page data');
  })
}

const createPageData = async () => {
  await axios.post(`/page-builder/data/pages`, {title: title.value});
  getAllPageData();
  closeCreateModal();
}

const openCreateModal = () => {
  createModalOpen.value = true;
}

const closeCreateModal = () => {
  createModalOpen.value = false;
}

onMounted(() => {
  getAllPageData();
});


</script>

<template>
  <div>
    <div class="md:flex md:items-center md:justify-between p-5">
      <div class="min-w-0 flex-1">
        <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
          Page Builder
        </h2>
      </div>
      <div class="mt-4 flex md:ml-4 md:mt-0">
        <button
            @click="openCreateModal"
            type="button"
            class="ml-3 inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Create New Page
        </button>
      </div>
    </div>
    <div class="px-4 sm:px-6 lg:px-8">
      <div class="mt-8 flow-root">
        <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table class="min-w-full divide-y divide-gray-300">
              <thead>
              <tr>
                <th
                    scope="col"
                    class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                >
                  Page Name
                </th>
                <th
                    scope="col"
                    class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                >
                  Page Slug
                </th>
                <th
                    scope="col"
                    class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                >
                  Created At
                </th>
                <th
                    scope="col"
                    class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                >
                  Updated At
                </th>
                <th
                    scope="col"
                    class="relative py-3.5 pl-3 pr-4 sm:pr-0"
                >
                  <span class="sr-only">Edit</span>
                </th>
              </tr>
              </thead>
              <tbody class="divide-y divide-gray-200">
              <tr
                v-for="page in pages"
              >
                <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                  {{ page.title}}
                </td>
                <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                  {{ page.slug }}
                </td>
                <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                  {{ new Date(page.created_at).toLocaleDateString() }} - {{ new Date(page.created_at).toLocaleTimeString() }}
                </td>
                <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                  {{ new Date(page.updated_at).toLocaleDateString() }} - {{ new Date(page.updated_at).toLocaleTimeString() }}
                </td>
                <td class="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                  <router-link
                      :to="`/page-builder/pages/${page.id}`"
                      class="text-indigo-600 hover:text-indigo-900">
                    Edit
                    </router-link>
                </td>
              </tr>

              <!-- More people... -->
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Modal
      @close="closeCreateModal"
      :open="createModalOpen"
  >
    <template #title>
      <h3 class="text-lg leading-6 font-medium text-gray-900">
        Create New Page
      </h3>
    </template>
    <template #body>
      <div class="mt-2">
        <p class="text-sm text-gray-500 flex flex-col gap-3">
          <label>Page Name</label>
          <input
              v-model="title"
              type="text"
              class="w-full border border-gray-300 rounded-md"
              @keydown.enter="createPageData"
          >
        </p>
      </div>
    </template>
    <template #actions>
      <button
          type="button"
          class="inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:col-start-2"
          @click="createPageData"
      >
        Create
      </button>
      <button
          type="button"
          class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:col-start-1 sm:mt-0"
          @click="createModalOpen = false" ref="cancelButtonRef"
      >
        Cancel
      </button>
    </template>
  </Modal>
</template>
