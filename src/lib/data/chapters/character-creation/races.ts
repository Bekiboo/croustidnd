import type { RuleSection } from '../../../types.js';

export const races: RuleSection = {
	id: "character-races",
	title: "Races",
	children: [
		{
			id: "human",
			title: "Humain",
			content: `
Les humains sont la race la plus polyvalente et adaptable.

## Bonus raciaux

- **+1 à toutes les caractéristiques**
- **Compétence supplémentaire** : Choisissez une compétence de votre choix
- **Don supplémentaire** : Choisissez un don au niveau 1

## Traits raciaux

- **Polyvalence** : Les humains excellent dans tous les domaines
- **Adaptation** : Bonus de +2 aux jets de sauvegarde contre la peur
- **Ambition** : XP supplémentaire pour les accomplissements personnels

## Rôleplay

Les humains sont curieux, ambitieux et souvent les meneurs naturels d'un groupe d'aventuriers.
			`.trim()
		},
		{
			id: "elf",
			title: "Elfe",
			content: `
Les elfes sont une race ancienne et magique, liée à la nature et aux arcanes.

## Bonus raciaux

- **+2 Dextérité, +1 Intelligence**
- **Sens aiguisés** : Maîtrise en Perception
- **Ascendance féérique** : Avantage aux jets de sauvegarde contre le charme

## Traits raciaux

- **Vision dans le noir** : Voir jusqu'à 18 mètres dans l'obscurité
- **Méditation elfique** : 4 heures de repos au lieu de 8
- **Entraînement aux armes** : Maîtrise des épées longues, épées courtes, arcs longs et arcs courts

## Sous-races

- **Haut-elfe** : +1 Intelligence supplémentaire, un tour de magie de magicien
- **Elfe des bois** : +1 Sagesse supplémentaire, vitesse de 10,5 mètres
			`.trim()
		},
		{
			id: "dwarf",
			title: "Nain",
			content: `
Les nains sont un peuple robuste, vivant sous terre et maîtrisant l'artisanat.

## Bonus raciaux

- **+2 Constitution, +1 Force**
- **Résistance naine** : Avantage aux jets contre le poison
- **Connaissance de la pierre** : Double bonus de maîtrise pour l'Histoire liée à la pierre

## Traits raciaux

- **Vision dans le noir** : Voir jusqu'à 18 mètres dans l'obscurité
- **Résistance aux dégâts de poison**
- **Entraînement nain au combat** : Maîtrise des haches, marteaux et armures

## Sous-races

- **Nain des montagnes** : +2 Force, maîtrise des armures légères et intermédiaires
- **Nain des collines** : +1 Sagesse, +1 point de vie par niveau
			`.trim()
		},
		{
			id: "halfling",
			title: "Halfelin",
			content: `
Les halfelins sont un peuple de petite taille mais au grand cœur.

## Bonus raciaux

- **+2 Dextérité, +1 Charisme**
- **Chanceux** : Relancer les 1 naturels sur les d20
- **Brave** : Avantage aux jets de sauvegarde contre la peur

## Traits raciaux

- **Petite taille** : Peut se faufiler dans les espaces occupés par des créatures plus grandes
- **Naturellement discret** : Peut se cacher derrière des créatures plus grandes
- **Agilité halfeline** : Vitesse de base de 7,5 mètres au lieu de 9

## Sous-races

- **Halfelin pied-léger** : +1 Charisme, compétence Discrétion
- **Halfelin robuste** : +1 Constitution, résistance aux poisons
			`.trim()
		}
	]
};
