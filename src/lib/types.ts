export interface RuleSection {
	id: string;
	title: string;
	content?: string;
	children?: RuleSection[];
	isChapter?: boolean; // Nouveau: indique si c'est un chapitre (toujours ouvert, non-cliquable)
}

export interface GameRules {
	title: string;
	sections: RuleSection[];
}
