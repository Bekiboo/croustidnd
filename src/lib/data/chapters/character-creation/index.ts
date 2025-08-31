import type { RuleSection } from '../../../types.js';
import { attributes } from './attributes.js';
import { racesList } from './races-list.js';
import { racesAttributes } from './races-attributes.js';
import { racesCreation } from './races-creation.js';
import { classes } from './classes.js';
import { skills } from './skills.js';

export const characterCreation: RuleSection = {
	id: "character-creation",
	title: "Création de Personnage",
	isChapter: true,
	children: [
		attributes,
		{
			id: "character-races",
			title: "Races",
			children: [
				racesList,
				racesAttributes,
				racesCreation
			]
		},
		classes,
		skills,
	]
};
