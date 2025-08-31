<script lang="ts">
	import type { RuleSection } from '$lib/types.js';
	import NavigationTree from './NavigationTree.svelte';
	
	interface Props {
		sections: RuleSection[];
		selectedId: string | null;
		onSelect: (id: string) => void;
		level?: number;
	}
	
	let { sections, selectedId, onSelect, level = 0 }: Props = $props();
	
	let expandedSections = $state<Set<string>>(new Set());
	let lastSelectedId = $state<string | null>(null);
	
	// Auto-expand la section parente si une de ses sous-sections est sélectionnée
	$effect(() => {
		// Seulement si selectedId a changé pour éviter les boucles infinies
		if (selectedId && selectedId !== lastSelectedId) {
			lastSelectedId = selectedId;
			
			// Trouver et expand toutes les sections parentes de la section sélectionnée
			function findAndExpandParents(sections: RuleSection[], targetId: string): string[] {
				for (const section of sections) {
					if (section.id === targetId) {
						return [];
					}
					if (section.children && section.children.length > 0) {
						const pathToTarget = findAndExpandParents(section.children, targetId);
						if (pathToTarget.length > 0 || section.children.some(child => child.id === targetId)) {
							return [section.id, ...pathToTarget];
						}
					}
				}
				return [];
			}
			
			const parentsToExpand = findAndExpandParents(sections, selectedId);
			if (parentsToExpand.length > 0) {
				const newExpanded = new Set(expandedSections);
				parentsToExpand.forEach(parentId => newExpanded.add(parentId));
				expandedSections = newExpanded;
			}
		}
	});
	
	function toggleSection(id: string) {
		if (expandedSections.has(id)) {
			expandedSections.delete(id);
		} else {
			expandedSections.add(id);
		}
		expandedSections = new Set(expandedSections);
	}
</script>

<ul class="space-y-1">
	{#each sections as section}
		<li>
			{#if section?.isChapter}
				<!-- Chapitre : toujours visible, non cliquable -->
				<div class="px-3 py-2 sm:py-3 text-sm font-bold text-gray-900 uppercase tracking-wide border-b border-gray-200 bg-gray-50 select-none">
					{section.title}
				</div>
				
				<!-- Sections du chapitre : toujours déployées -->
				{#if section.children && section.children.length > 0}
					<div class="mt-1">
						<NavigationTree 
							sections={section.children} 
							{selectedId} 
							{onSelect} 
							level={level + 1}
						/>
					</div>
				{/if}
			{:else}
				<!-- Section normale -->
				<div class="flex items-center {level > 0 ? 'ml-' + (level * 3) + ' sm:ml-' + (level * 4) : ''}">
					{#if section.children && section.children.length > 0}
						<button
							class="flex-shrink-0 w-5 h-5 mr-2 flex items-center justify-center text-gray-400 hover:text-gray-600 transition-colors touch-manipulation"
							onclick={() => toggleSection(section.id)}
							aria-label={expandedSections.has(section.id) ? 'Réduire' : 'Développer'}
						>
							{#if expandedSections.has(section.id)}
								<svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
								</svg>
							{:else}
								<svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
								</svg>
							{/if}
						</button>
					{:else}
						<div class="w-5 h-5 mr-2"></div>
					{/if}
					
					{#if section.children && section.children.length > 0}
						<!-- Section titre : uniquement pour déployer/réduire -->
						<button
							class="flex-1 text-left px-3 py-2 sm:py-3 rounded-md text-sm font-semibold transition-colors text-gray-800 hover:bg-gray-50 cursor-pointer touch-manipulation select-none"
							onclick={() => toggleSection(section.id)}
						>
							{section.title}
						</button>
					{:else}
						<!-- Section avec contenu : cliquable pour navigation -->
						<button
							class="flex-1 text-left px-3 py-2 sm:py-3 rounded-md text-sm font-medium transition-colors touch-manipulation select-none {
								selectedId === section.id 
									? 'bg-blue-100 text-blue-700 border-l-4 border-blue-500' 
									: 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
							}"
							onclick={() => onSelect(section.id)}
						>
							{section.title}
						</button>
					{/if}
				</div>
				
				{#if section.children && section.children.length > 0 && expandedSections.has(section.id)}
					<div class="mt-1">
						<NavigationTree 
							sections={section.children} 
							{selectedId} 
							{onSelect} 
							level={level + 1}
						/>
					</div>
				{/if}
			{/if}
		</li>
	{/each}
</ul>
