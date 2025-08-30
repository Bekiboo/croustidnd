<script lang="ts">
	import { croustidndRules } from '$lib/data/rules.js';
	import ResponsiveLayout from '$lib/components/ResponsiveLayout.svelte';
	
	interface PageData {
		section: any;
		sectionId: string;
	}
	
	let { data }: { data: PageData } = $props();
</script>

<svelte:head>
	<title>{data.section ? `${data.section.title} - ${croustidndRules.title}` : croustidndRules.title}</title>
	<meta name="description" content="Système de jeu de rôle CroustiDnD - Règles et mécaniques inspirées de D&D" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
</svelte:head>

<ResponsiveLayout selectedSection={data.section} selectedId={data.sectionId} />
