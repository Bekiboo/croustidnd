<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import { page } from '$app/stores';
	import { afterNavigate } from '$app/navigation';
	import SimpleNavigation from '$lib/components/SimpleNavigation.svelte';

	let { children } = $props();
	
	// Check if we're on a page that should show navigation using Svelte 5 syntax
	const showNavigation = $derived($page.url.pathname !== '/');
	
	// Handle scroll restoration after navigation
	afterNavigate(() => {
		// Get the main content element (the scrollable container)
		const mainElement = document.querySelector('main.overflow-y-auto');
		const hash = window.location.hash;
		
		if (hash) {
			// If there's a hash, try to scroll to that element within the main container
			setTimeout(() => {
				const element = document.getElementById(hash.slice(1));
				if (element && mainElement) {
					// Scroll the main container to show the target element
					element.scrollIntoView({ behavior: 'smooth', block: 'start' });
				} else if (mainElement) {
					// Fallback to top of main container
					mainElement.scrollTop = 0;
				}
			}, 100);
		} else {
			// No hash, scroll main container to top
			if (mainElement) {
				mainElement.scrollTop = 0;
			}
		}
	});
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
