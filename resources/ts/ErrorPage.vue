<script setup lang="ts">
	import {useRouter} from "vue-router";

	type ErrorMessage = {
		header: string;
		subtitle: string;
	};

	const router = useRouter();

	// get the status code from the url
	const statusCode: number = parseInt(router.currentRoute.value.params.code as string);

	// create an appropriate header and subtitle for each error code
	const errorMessages: Record<number, ErrorMessage> = {
		403: {
			header: 'Forbidden',
			subtitle: 'Sorry, you don’t have access to this page.',
		},
		404: {
			header: 'Page not found',
			subtitle: 'Sorry, we couldn’t find the page you’re looking for.',
		},
		500: {
			header: 'Internal server error',
			subtitle: 'Sorry, something went wrong.',
		},
		503: {
			header: 'Service unavailable',
			subtitle: 'Sorry, the service is unavailable.',
		},
		504: {
			header: 'Gateway timeout',
			subtitle: 'Sorry, the gateway timed out.',
		},
	};

	// set the header and subtitle based on the status code
	const header: string = errorMessages[statusCode].header;
	const subtitle: string = errorMessages[statusCode].subtitle;


</script>

<template>
	<main class="grid h-screen place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
		<div class="text-center">
			<p class="text-base font-semibold text-indigo-600">{{ statusCode }}</p>
			<h1 class="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
				{{ header }}
			</h1>
			<p class="mt-6 text-base leading-7 text-gray-600">
				{{ subtitle }}
			</p>
		</div>
	</main>
</template>

<style scoped>

</style>
