import type { RuleSection } from '../../../types.js';

export const attributes: RuleSection = {
	id: "character-attributes",
	title: "Caractéristiques",
	children: [
		{
			id: "strength",
			title: "Force",
			content: `
La Force mesure la puissance physique de votre personnage.

## Utilisations de la Force

- **Attaques au corps à corps** : Ajoutez votre modificateur de Force aux jets d'attaque et de dégâts avec les armes de mêlée
- **Porter et soulever** : Détermine combien votre personnage peut porter
- **Escalade et saut** : Tests de Force pour grimper ou sauter

## Calcul du modificateur

Le modificateur de Force = (Score de Force - 10) / 2 (arrondi à l'inférieur)

**Exemples :**
- Force 8 → Modificateur -1
- Force 12 → Modificateur +1
- Force 16 → Modificateur +3
			`.trim()
		},
		{
			id: "dexterity",
			title: "Dextérité",
			content: `
La Dextérité mesure l'agilité, les réflexes et l'équilibre.

## Utilisations de la Dextérité

- **Attaques à distance** : Ajoutez votre modificateur de Dextérité aux jets d'attaque avec les armes à distance
- **Classe d'Armure** : Ajoute à votre CA si vous ne portez pas d'armure lourde
- **Initiative** : Détermine l'ordre d'action en combat
- **Discrétion** : Tests pour se cacher et se déplacer silencieusement

## Calcul du modificateur

Le modificateur de Dextérité = (Score de Dextérité - 10) / 2 (arrondi à l'inférieur)
			`.trim()
		},
		{
			id: "constitution",
			title: "Constitution",
			content: `
La Constitution représente la santé et l'endurance de votre personnage.

## Utilisations de la Constitution

- **Points de vie** : Ajoutez votre modificateur de Constitution à vos PV à chaque niveau
- **Concentration** : Tests pour maintenir la concentration sur les sorts
- **Résistance** : Jets de sauvegarde contre les poisons et maladies

## Points de vie

À chaque niveau, vous gagnez : DV de classe + modificateur de Constitution
			`.trim()
		},
		{
			id: "intelligence",
			title: "Intelligence",
			content: `
L'Intelligence mesure la capacité de raisonnement et la mémoire.

## Utilisations de l'Intelligence

- **Sorts** : Les magiciens utilisent l'Intelligence pour leurs sorts
- **Compétences** : Investigation, Histoire, Arcanes, Religion, Nature
- **Langues** : Détermine le nombre de langues connues

## Sorts et Intelligence

- **Sorts connus** : Bonus égal au modificateur d'Intelligence
- **DD des sorts** : 8 + bonus de maîtrise + modificateur d'Intelligence
			`.trim()
		},
		{
			id: "wisdom",
			title: "Sagesse",
			content: `
La Sagesse reflète l'intuition et la perspicacité.

## Utilisations de la Sagesse

- **Sorts** : Les clercs et druides utilisent la Sagesse pour leurs sorts
- **Perception** : Remarquer les détails et les dangers
- **Survie** : Navigation et pistage en milieu naturel
- **Intuition** : Comprendre les motivations d'autrui

## Jets de sauvegarde

La Sagesse est souvent utilisée pour résister aux effets mentaux.
			`.trim()
		},
		{
			id: "charisma",
			title: "Charisme",
			content: `
Le Charisme mesure la force de personnalité et le magnétisme.

## Utilisations du Charisme

- **Sorts** : Les bardes, paladins et sorciers utilisent le Charisme
- **Interactions sociales** : Persuasion, Tromperie, Intimidation
- **Leadership** : Commander et inspirer les autres

## Influence sociale

Le Charisme détermine votre capacité à influencer les PNJ et à mener un groupe.
			`.trim()
		}
	]
};
