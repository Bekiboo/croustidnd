import { introduction } from './chapters/introduction/index.js';
import { characterCreation } from './chapters/character-creation/index.js';
import { combat } from './chapters/combat/index.js';
import type { RuleSection } from '$lib/types.js';

export const croustidndRules = {
	title: "CroustiDnD",
	description: "Un système de jeu de rôle inspiré de D&D avec des mécaniques simplifiées et accessibles",
	sections: [
		introduction,
		characterCreation,
		combat
	] as RuleSection[]
};
