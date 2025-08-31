import type { RuleSection } from '../../../types.js';

export const attributes: RuleSection = {
	id: "character-attributes",
	title: "Caractéristiques",
	children: [
		{
			id: "attributes-description",
			title: "Description des caractéristiques",
			content: `
- **Force** : puissance physique et capacité à porter ou soulever des charges.  
- **Dextérité** : agilité, coordination et rapidité des réflexes.  
- **Constitution** : résistance physique, vitalité et endurance.  
- **Intelligence** : logique, mémoire, connaissances et capacité d’apprentissage.  
- **Sagesse** : perception, intuition et bon sens.  
- **Charisme** : force de personnalité, persuasion et influence sociale.  
			`.trim()
		},
		{
			id: "attributes-roll",
			title: "Tirage des caractéristiques",
			content: `
**Méthode de base :**  
Lancez **12×6d6**. Chaque dé est assigné à une caractéristique selon sa valeur :  

- 1 = Force  
- 2 = Dextérité  
- 3 = Constitution  
- 4 = Intelligence  
- 5 = Sagesse  
- 6 = Charisme  

Le total des dés pour chaque chiffre détermine le score de cette caractéristique.  

**Limites :**  
Une caractéristique ne peut pas dépasser **18**.  
Si le total excède cette valeur, retirez les dés en trop jusqu’à revenir à 18.  

**Jets spéciaux :**  
Si un lancer de 6d6 donne **6 fois le même chiffre**, vous gagnez immédiatement une **modification supplémentaire**.  

**Total fixe :**  
Ce système génère toujours un total de **72 points répartis** entre les six caractéristiques.  

**Modifications finales :**  
Après le tirage, le joueur choisit **3 modifications** parmi les options suivantes :  

- **+2 et -2** dans deux caractéristiques différentes  
- **+1** dans une caractéristique  
- **Échanger** deux caractéristiques  
			`.trim()
		}
	]
};
