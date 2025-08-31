import type { RuleSection } from '../../../types.js';
import { basics } from './basics.js';

export const introduction: RuleSection = {
	id: "introduction",
	title: "Introduction",
	isChapter: true,
	children: [
		basics
	]
};
