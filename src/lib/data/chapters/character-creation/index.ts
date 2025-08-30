import type { RuleSection } from '../../../types.js';
import { attributes } from './attributes.js';
import { races } from './races.js';
import { classes } from './classes.js';
import { skills } from './skills.js';

export const characterCreation: RuleSection = {
	id: "character-creation",
	title: "Création de Personnage",
	isChapter: true,
	children: [
		attributes,
		races,
		classes,
		skills
	]
};
