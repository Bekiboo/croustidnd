import type { RuleSection } from '../../../types.js';

export const introduction: RuleSection = {
	id: "introduction",
	title: "Introduction",
	isChapter: true,
	children: [
		{
			id: "what-is-croustidnd",
			title: "Qu'est-ce que CroustiDnD ?",
			content: `
CroustiDnD est un système de jeu de rôle inspiré de Dungeons & Dragons, conçu pour être accessible aux nouveaux joueurs tout en conservant la profondeur tactique qui fait le charme du jeu de rôle.

## Objectifs du système

- **Simplicité** : Règles claires et faciles à retenir
- **Rapidité** : Résolution rapide des actions pour maintenir le rythme
- **Flexibilité** : Adaptation facile aux différents styles de jeu
- **Équilibre** : Toutes les classes et races sont viables

## Ce dont vous avez besoin

- Des dés à 20 faces (d20) et autres dés polyhédriques
- Des feuilles de personnage
- Du papier et des crayons
- Votre imagination !
			`.trim()
		},
		{
			id: "basic-mechanics",
			title: "Mécaniques de base",
			content: `
CroustiDnD utilise principalement un système de d20 pour résoudre les actions.

## Principe fondamental

**Jet de base :** 1d20 + Modificateur + Bonus ≥ Difficulté

## Niveaux de difficulté

- **Très facile :** 5
- **Facile :** 10
- **Modéré :** 15
- **Difficile :** 20
- **Très difficile :** 25
- **Quasi impossible :** 30

## Types de jets

- **Jets de caractéristique** : Tests d'attributs purs
- **Jets de compétence** : Tests avec bonus de maîtrise
- **Jets de sauvegarde** : Résistance aux effets néfastes
- **Jets d'attaque** : Pour toucher un adversaire
			`.trim()
		}
	]
};
