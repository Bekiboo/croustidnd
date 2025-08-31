<script lang="ts">
	import { page } from '$app/stores';
	
	// Mobile menu state
	let mobileMenuOpen = $state(false);
	
	// Define the navigation structure
	const navigation = [
		{
			title: "Introduction",
			href: "/introduction",
			icon: "📖"
		},
		{
			title: "Création de Personnage",
			href: "/character-creation",
			icon: "🎭",
			children: [
				{ title: "Attributs", href: "/character-creation/attributes" },
				{ 
					title: "Races", 
					href: "/character-creation/races",
					children: [
						{ title: "Attributs achetables", href: "/character-creation/races/attributes" },
						{ title: "Règles de création", href: "/character-creation/races/creation" }
					]
				},
				{ title: "Classes", href: "/character-creation/classes" },
				{ title: "Compétences", href: "/character-creation/skills" }
			]
		},
		{
			title: "Combat",
			href: "/combat",
			icon: "⚔️",
			children: [
				{ title: "Bases du combat", href: "/combat/basics" },
				{ title: "Actions de combat", href: "/combat/actions" }
			]
		}
	];
	
	function isActive(href: string): boolean {
		return $page.url.pathname === href;
	}
	
	function isParentActive(item: any): boolean {
		if (isActive(item.href)) return true;
		if (item.children) {
			return item.children.some((child: any) => isParentActive(child));
		}
		return false;
	}
	
	function closeMobileMenu() {
		mobileMenuOpen = false;
	}
</script>

<!-- Mobile Header with Hamburger -->
<div class="lg:hidden bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between">
	<a href="/" class="text-xl font-bold text-gray-900">CroustiDnD</a>
	<button
		onclick={() => mobileMenuOpen = !mobileMenuOpen}
		class="p-2 rounded-md text-gray-600 hover:bg-gray-100 touch-manipulation"
		aria-label="Menu"
	>
		<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
			<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
		</svg>
	</button>
</div>

<!-- Mobile Menu Overlay -->
{#if mobileMenuOpen}
	<div class="lg:hidden fixed inset-0 z-50 bg-black bg-opacity-50" onclick={closeMobileMenu}></div>
{/if}

<!-- Navigation Sidebar -->
<nav class="
	{mobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
	lg:relative fixed top-0 left-0 z-50
	bg-white border-r border-gray-200 w-80 h-screen overflow-y-auto
	transition-transform duration-300 ease-in-out
	lg:transition-none
">
	<div class="p-4">
		<!-- Desktop title -->
		<a href="/" class="hidden lg:block text-xl font-bold text-gray-900 mb-6">CroustiDnD</a>
		
		<!-- Mobile close button -->
		<div class="lg:hidden flex items-center justify-between mb-6">
			<a href="/" class="text-xl font-bold text-gray-900" onclick={closeMobileMenu}>CroustiDnD</a>
			<button
				onclick={closeMobileMenu}
				class="p-2 rounded-md text-gray-600 hover:bg-gray-100 touch-manipulation"
				aria-label="Fermer le menu"
			>
				<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
				</svg>
			</button>
		</div>
		
		<ul class="space-y-1">
			{#each navigation as item}
				<li>
					<a 
						href={item.href}
						onclick={closeMobileMenu}
						class="flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors touch-manipulation {
							isActive(item.href) 
								? 'bg-blue-100 text-blue-700' 
								: 'text-gray-700 hover:bg-gray-100'
						}"
					>
						<span class="mr-3">{item.icon}</span>
						{item.title}
					</a>
					
					{#if item.children && isParentActive(item)}
						<ul class="ml-6 mt-1 space-y-1">
							{#each item.children as child}
								<li>
									<a 
										href={child.href}
										onclick={closeMobileMenu}
										class="block px-3 py-2 text-sm rounded-md transition-colors touch-manipulation {
											isActive(child.href) 
												? 'bg-blue-100 text-blue-700 font-medium' 
												: 'text-gray-600 hover:bg-gray-50'
										}"
									>
										{child.title}
									</a>
									
									{#if child.children && isParentActive(child)}
										<ul class="ml-4 mt-1 space-y-1">
											{#each child.children as grandchild}
												<li>
													<a 
														href={grandchild.href}
														onclick={closeMobileMenu}
														class="block px-3 py-1 text-xs rounded-md transition-colors touch-manipulation {
															isActive(grandchild.href) 
																? 'bg-blue-100 text-blue-700 font-medium' 
																: 'text-gray-500 hover:bg-gray-50'
														}"
													>
														{grandchild.title}
													</a>
												</li>
											{/each}
										</ul>
									{/if}
								</li>
							{/each}
						</ul>
					{/if}
				</li>
			{/each}
		</ul>
	</div>
</nav>
