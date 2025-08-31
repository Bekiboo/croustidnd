<script lang="ts">
	import { search, type SearchResult } from '$lib/utils/search.js';
	import { goto } from '$app/navigation';
	
	let searchQuery = $state('');
	let searchResults = $state<SearchResult[]>([]);
	let isOpen = $state(false);
	let searchInput: HTMLInputElement;
	
	// Search when query changes
	$effect(() => {
		if (searchQuery.trim().length >= 2) {
			searchResults = search(searchQuery);
			isOpen = true;
		} else {
			searchResults = [];
			isOpen = false;
		}
	});
	
	function handleSearchSubmit(event: SubmitEvent) {
		event.preventDefault();
		if (searchResults.length > 0) {
			selectResult(searchResults[0]);
		}
	}
	
	function selectResult(result: SearchResult) {
		const url = result.anchor ? `${result.url}#${result.anchor}` : result.url;
		goto(url);
		searchQuery = '';
		isOpen = false;
		searchInput?.blur();
	}
	
	function handleKeydown(event: KeyboardEvent) {
		if (event.key === 'Escape') {
			isOpen = false;
			searchInput?.blur();
		}
	}
	
	function closeSearch() {
		isOpen = false;
	}
	
	function getResultIcon(type: SearchResult['type']) {
		switch (type) {
			case 'title': return '📄';
			case 'subtitle': return '📝';
			case 'content': return '🔍';
			default: return '📄';
		}
	}
	
	function getResultTypeLabel(type: SearchResult['type']) {
		switch (type) {
			case 'title': return 'Page';
			case 'subtitle': return 'Section';
			case 'content': return 'Contenu';
			default: return 'Page';
		}
	}
</script>

<svelte:window onkeydown={handleKeydown} />

<div class="relative">
	<!-- Search Input -->
	<form onsubmit={handleSearchSubmit} class="relative">
		<div class="relative">
			<svg 
				class="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" 
				fill="none" 
				stroke="currentColor" 
				viewBox="0 0 24 24"
			>
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
			</svg>
			<input
				bind:this={searchInput}
				bind:value={searchQuery}
				type="text"
				placeholder="Rechercher dans les règles..."
				class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
				autocomplete="off"
			/>
		</div>
	</form>
	
	<!-- Search Results Dropdown -->
	{#if isOpen && searchResults.length > 0}
		<div class="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-96 overflow-y-auto">
			{#each searchResults as result, index}
				<button
					onclick={() => selectResult(result)}
					class="w-full text-left px-4 py-3 hover:bg-gray-50 border-b border-gray-100 last:border-b-0 focus:bg-gray-50 focus:outline-none transition-colors"
				>
					<div class="flex items-start space-x-3">
						<span class="text-lg flex-shrink-0 mt-0.5">{getResultIcon(result.type)}</span>
						<div class="flex-1 min-w-0">
							<div class="flex items-center space-x-2 mb-1">
								<span class="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-0.5 rounded">
									{getResultTypeLabel(result.type)}
								</span>
							</div>
							<div class="font-medium text-gray-900 text-sm mb-1 truncate">
								{result.title}
							</div>
							<div class="text-xs text-gray-600 line-clamp-2">
								{@html result.excerpt.replace(/\*\*(.*?)\*\*/g, '<strong class="bg-yellow-200">$1</strong>')}
							</div>
						</div>
					</div>
				</button>
			{/each}
		</div>
	{/if}
	
	{#if isOpen && searchQuery.trim().length >= 2 && searchResults.length === 0}
		<div class="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 p-4 text-center text-gray-500 text-sm">
			Aucun résultat trouvé pour "{searchQuery}"
		</div>
	{/if}
</div>

<!-- Backdrop to close search when clicking outside -->
{#if isOpen}
	<div 
		class="fixed inset-0 z-40" 
		onclick={closeSearch}
		onkeydown={(e) => e.key === 'Escape' && closeSearch()}
		role="button"
		tabindex="-1"
		aria-label="Fermer la recherche"
	></div>
{/if}

<style>
	.line-clamp-2 {
		display: -webkit-box;
		-webkit-line-clamp: 2;
		line-clamp: 2;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}
</style>
