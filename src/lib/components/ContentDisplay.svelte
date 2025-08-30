<script lang="ts">
	import type { RuleSection } from '$lib/types.js';
	
	interface Props {
		section: RuleSection | null;
	}
	
	let { section }: Props = $props();
	
	// Simple fonction pour convertir le markdown basique en HTML
	function parseMarkdown(text: string): string {
		return text
			// Titres
			.replace(/^### (.+)$/gm, '<h3 class="text-lg font-semibold mt-6 mb-3 text-gray-900">$1</h3>')
			.replace(/^## (.+)$/gm, '<h2 class="text-xl font-bold mt-8 mb-4 text-gray-900 border-b border-gray-200 pb-2">$1</h2>')
			.replace(/^# (.+)$/gm, '<h1 class="text-2xl font-bold mt-8 mb-6 text-gray-900">$1</h1>')
			// Gras
			.replace(/\*\*(.+?)\*\*/g, '<strong class="font-semibold text-gray-900">$1</strong>')
			// Listes à puces
			.replace(/^- (.+)$/gm, '<li class="ml-4">$1</li>')
			// Paragraphes
			.replace(/\n\n/g, '</p><p class="mb-4">')
			// Nettoyer et wrapper dans des paragraphes
			.replace(/^(.)/gm, '<p class="mb-4">$1')
			.replace(/(.+)$/gm, '$1</p>')
			// Corriger les listes
			.replace(/<p class="mb-4"><li/g, '<li')
			.replace(/<\/li><\/p>/g, '</li>')
			// Wrapper les listes
			.replace(/(<li.*<\/li>(\s*<li.*<\/li>)*)/g, '<ul class="list-disc list-inside space-y-1 mb-4">$1</ul>')
			// Nettoyer les paragraphes vides
			.replace(/<p class="mb-4"><\/p>/g, '');
	}
</script>

<div class="content-scrollable">
	{#if section}
		<article class="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8">
			<header class="mb-6 lg:mb-8">
				<h1 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">{section.title}</h1>
				<div class="w-16 sm:w-24 h-1 bg-blue-500 rounded"></div>
			</header>
			
			{#if section.content}
				<div class="prose prose-sm sm:prose-base lg:prose-lg max-w-none">
					{@html parseMarkdown(section.content)}
				</div>
			{:else}
				<div class="text-center py-8 sm:py-12">
					<div class="text-gray-400 mb-4">
						<svg class="w-12 h-12 sm:w-16 sm:h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
						</svg>
					</div>
					<p class="text-gray-500 text-base sm:text-lg px-4">
						Cette section contient des sous-sections. Sélectionnez un élément dans le menu de navigation pour afficher son contenu.
					</p>
				</div>
			{/if}
		</article>
	{:else}
		<div class="h-full flex items-center justify-center p-4">
			<div class="text-center">
				<div class="text-gray-400 mb-4">
					<svg class="w-16 h-16 sm:w-20 sm:h-20 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
					</svg>
				</div>
				<h2 class="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Bienvenue dans CroustiDnD</h2>
				<p class="text-gray-600 text-base sm:text-lg max-w-md px-4">
					Sélectionnez une section dans le menu de navigation pour commencer à explorer les règles de jeu.
				</p>
			</div>
		</div>
	{/if}
</div>
