import { error } from '@sveltejs/kit';
import { croustidndRules } from '$lib/data/rules.js';
import type { RuleSection } from '$lib/types.js';

export function load({ params }: { params: { section: string } }) {
	function findSectionById(sections: RuleSection[], id: string): RuleSection | null {
		for (const section of sections) {
			if (section.id === id) {
				return section;
			}
			if (section.children) {
				const found = findSectionById(section.children, id);
				if (found) return found;
			}
		}
		return null;
	}

	const section = findSectionById(croustidndRules.sections, params.section);
	
	// Vérifier que la section existe ET qu'elle a du contenu (pas d'enfants)
	if (!section || (section.children && section.children.length > 0)) {
		throw error(404, {
			message: 'Section introuvable ou non accessible directement'
		});
	}

	return {
		section,
		sectionId: params.section
	};
}
