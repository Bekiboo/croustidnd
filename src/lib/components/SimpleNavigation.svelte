<script lang="ts">
	import { page } from '$app/stores';
	
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
</script>

<nav class="bg-white border-r border-gray-200 w-80 h-screen overflow-y-auto">
	<div class="p-4">
		<a href="/" class="block text-xl font-bold text-gray-900 mb-6">CroustiDnD</a>
		
		<ul class="space-y-1">
			{#each navigation as item}
				<li>
					<a 
						href={item.href}
						class="flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors {
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
										class="block px-3 py-2 text-sm rounded-md transition-colors {
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
														class="block px-3 py-1 text-xs rounded-md transition-colors {
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
