<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import { page } from '$app/stores';
	import SimpleNavigation from '$lib/components/SimpleNavigation.svelte';

	let { children } = $props();
	
	// Check if we're on a page that should show navigation using Svelte 5 syntax
	const showNavigation = $derived($page.url.pathname !== '/');
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

{#if showNavigation}
	<div class="flex h-screen lg:flex-row flex-col">
		<SimpleNavigation />
		<main class="flex-1 overflow-y-auto lg:pt-0 pt-16">
			<div class="max-w-4xl mx-auto px-6 py-8 prose prose-lg">
				{@render children()}
			</div>
		</main>
	</div>
{:else}
	{@render children()}
{/if}
