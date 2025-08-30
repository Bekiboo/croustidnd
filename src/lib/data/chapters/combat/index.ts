import type { RuleSection } from '../../../types.js';
import { basics } from './basics.js';
import { actions } from './actions.js';

export const combat: RuleSection = {
	id: "combat",
	title: "Combat",
	isChapter: true,
	children: [
		basics,
		actions
	]
};
