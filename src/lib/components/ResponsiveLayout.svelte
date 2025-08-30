<script lang="ts">
	import { goto } from '$app/navigation';
	import { croustidndRules } from '$lib/data/rules.js';
	import type { RuleSection } from '$lib/types.js';
	import NavigationTree from './NavigationTree.svelte';
	import ContentDisplay from './ContentDisplay.svelte';
	import { onMount } from 'svelte';
	
	interface Props {
		selectedSection?: RuleSection | null;
		selectedId?: string | null;
	}
	
	let { selectedSection = null, selectedId = null }: Props = $props();
	
	// État pour la navigation mobile
	let isNavOpen = $state(false);
	let touchStartX = $state(0);
	let touchStartY = $state(0);
	let isDragging = $state(false);
	let dragDistance = $state(0);
	let containerRef: HTMLDivElement;
	
	// Paramètres de sensibilité pour le drag
	const DRAG_THRESHOLD = 10;
	const OPEN_THRESHOLD = 80;
	const CLOSE_THRESHOLD = 80;
	const EDGE_ZONE = 50; // Zone plus large pour détecter le début du swipe
	
	function onSectionSelect(id: string) {
		goto(`/${id}`, { replaceState: false });
		// Fermer la navigation après sélection sur mobile
		if (window.innerWidth < 1024) {
			isNavOpen = false;
		}
	}
	
	// Gestion des événements tactiles pour le drag
	function handleTouchStart(event: TouchEvent) {
		if (window.innerWidth >= 1024) return;
		
		const touch = event.touches[0];
		touchStartX = touch.clientX;
		touchStartY = touch.clientY;
		isDragging = false;
		dragDistance = 0;
	}
	
	function handleTouchMove(event: TouchEvent) {
		if (window.innerWidth >= 1024) return;
		
		const touch = event.touches[0];
		const deltaX = touch.clientX - touchStartX;
		const deltaY = Math.abs(touch.clientY - touchStartY);
		
		// Détecter un mouvement horizontal significatif
		if (!isDragging && Math.abs(deltaX) > DRAG_THRESHOLD && Math.abs(deltaX) > deltaY) {
			// Permettre l'ouverture depuis le bord gauche ou si déjà ouvert
			const canDragToOpen = !isNavOpen && deltaX > 0 && touchStartX < EDGE_ZONE;
			const canDragToClose = isNavOpen && deltaX < 0;
			
			if (canDragToOpen || canDragToClose) {
				isDragging = true;
				event.preventDefault();
			}
		}
		
		if (isDragging) {
			dragDistance = deltaX;
			event.preventDefault(); // Empêcher le scroll pendant le drag
		}
	}
	
	function handleTouchEnd(event: TouchEvent) {
		if (window.innerWidth >= 1024 || !isDragging) return;
		
		const touch = event.changedTouches[0];
		const deltaX = touch.clientX - touchStartX;
				
		// Ouvrir le menu si glissement vers la droite depuis le bord
		if (!isNavOpen && deltaX > OPEN_THRESHOLD && touchStartX < EDGE_ZONE) {
			isNavOpen = true;
		}
		// Fermer le menu si glissement vers la gauche
		else if (isNavOpen && deltaX < -CLOSE_THRESHOLD) {
			isNavOpen = false;
		}
		
		isDragging = false;
		dragDistance = 0;
	}
	
	function closeMobileNav() {
		isNavOpen = false;
	}
	
	// Ajouter les event listeners avec passive: false
	onMount(() => {
		if (containerRef) {
			containerRef.addEventListener('touchstart', handleTouchStart, { passive: false });
			containerRef.addEventListener('touchmove', handleTouchMove, { passive: false });
			containerRef.addEventListener('touchend', handleTouchEnd, { passive: false });
			
			return () => {
				containerRef.removeEventListener('touchstart', handleTouchStart);
				containerRef.removeEventListener('touchmove', handleTouchMove);
				containerRef.removeEventListener('touchend', handleTouchEnd);
			};
		}
	});
</script>

<div 
	bind:this={containerRef}
	class="h-screen flex bg-gray-50 relative overflow-hidden"
>
	<!-- Desktop: Navigation fixe à gauche -->
	<aside class="hidden lg:flex w-80 bg-white border-r border-gray-200 flex-col shadow-sm">
		<header class="px-6 py-4 border-b border-gray-200 bg-gradient-to-r from-blue-600 to-blue-700">
			<button 
				onclick={() => goto('/')}
				class="text-left w-full hover:opacity-90 transition-opacity select-none"
			>
				<h1 class="text-xl font-bold text-white">{croustidndRules.title}</h1>
				<p class="text-blue-100 text-sm mt-1">Manuel des règles</p>
			</button>
		</header>
		
		<nav class="flex-1 overflow-y-auto p-4">
			<NavigationTree 
				sections={croustidndRules.sections} 
				onSelect={onSectionSelect} 
				selectedId={selectedId}
			/>
		</nav>
		
		<footer class="px-6 py-3 border-t border-gray-200 bg-gray-50">
			<p class="text-xs text-gray-500 text-center">CroustiDnD v1.0</p>
		</footer>
	</aside>

	<!-- Mobile: Overlay sombre -->
	{#if isNavOpen}
		<button 
			class="lg:hidden fixed inset-0 bg-black bg-opacity-30 z-40 cursor-default"
			onclick={closeMobileNav}
			aria-label="Fermer le menu"
		></button>
	{/if}

	<!-- Mobile: Navigation coulissante -->
	<aside 
		class="lg:hidden fixed inset-y-0 left-0 w-72 bg-white shadow-2xl z-50 flex flex-col transform transition-transform duration-300 ease-out"
		class:translate-x-0={isNavOpen}
		class:-translate-x-full={!isNavOpen}
	>
		<header class="px-4 py-3 border-b border-gray-200 bg-gradient-to-r from-blue-600 to-blue-700">
			<div class="flex items-center justify-between">
				<button 
					onclick={() => goto('/')}
					class="text-left hover:opacity-90 transition-opacity select-none"
				>
					<h1 class="text-lg font-bold text-white">{croustidndRules.title}</h1>
					<p class="text-blue-100 text-xs mt-1">Manuel des règles</p>
				</button>
				
				<button
					onclick={closeMobileNav}
					class="text-white hover:text-blue-200 transition-colors p-1 select-none"
					aria-label="Fermer le menu"
				>
					<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
					</svg>
				</button>
			</div>
		</header>
		
		<nav class="flex-1 overflow-y-auto p-3">
			<NavigationTree 
				sections={croustidndRules.sections} 
				onSelect={onSectionSelect} 
				selectedId={selectedId}
			/>
		</nav>
		
		<footer class="px-4 py-2 border-t border-gray-200 bg-gray-50">
			<p class="text-xs text-gray-500 text-center">CroustiDnD v1.0</p>
		</footer>
	</aside>

	<!-- Zone de contenu principal -->
	<main class="flex-1 flex flex-col min-w-0">
		<!-- En-tête mobile -->
		<header class="lg:hidden px-4 py-3 bg-white border-b border-gray-200 shadow-sm">
			<div class="flex items-center justify-between">
				<div class="flex items-center space-x-3">
					<!-- Bouton temporaire pour tester -->
					<button 
						onclick={() => isNavOpen = !isNavOpen}
						class="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors select-none"
						aria-label="Toggle menu"
					>
						<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
						</svg>
					</button>
					
					<h2 class="text-lg font-semibold text-gray-900 truncate select-none">
						{selectedSection ? selectedSection.title : 'CroustiDnD'}
					</h2>
				</div>
				
				<!-- Indicateur de swipe -->
				<div class="flex items-center text-gray-400 select-none">
					<svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
					</svg>
					<span class="text-xs">Swipe →</span>
				</div>
			</div>
		</header>
		
		<!-- Contenu principal -->
		<div class="flex-1 content-scrollable">
			<ContentDisplay section={selectedSection} />
		</div>
	</main>
</div>
