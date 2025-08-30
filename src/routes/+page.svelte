<script lang="ts">
	import { croustidndRules } from '$lib/data/rules.js';
	import ResponsiveLayout from '$lib/components/ResponsiveLayout.svelte';
</script>

<svelte:head>
	<title>{croustidndRules.title}</title>
	<meta name="description" content="Système de jeu de rôle CroustiDnD - Règles et mécaniques inspirées de D&D" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
</svelte:head>

<ResponsiveLayout selectedSection={null} selectedId={null} />
