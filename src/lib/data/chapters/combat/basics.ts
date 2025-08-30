import type { RuleSection } from '../../../types.js';

export const basics: RuleSection = {
	id: "combat-basics",
	title: "Bases du combat",
	children: [
		{
			id: "initiative",
			title: "Initiative",
			content: `
L'initiative détermine l'ordre dans lequel les créatures agissent pendant le combat.

## Jet d'initiative

Au début du combat, chaque participant lance 1d20 + modificateur de Dextérité.

## Ordre d'action

Les participants agissent dans l'ordre décroissant de leur jet d'initiative.

**En cas d'égalité :**
1. Les joueurs agissent avant les PNJ
2. Entre joueurs : celui avec la Dextérité la plus élevée
3. Si encore égal : relancer le d20

## Retarder son action

Vous pouvez choisir d'agir plus tard dans l'ordre d'initiative. Votre nouvelle initiative devient celle du moment où vous agissez.
			`.trim()
		},
		{
			id: "combat-round",
			title: "Tour de combat",
			content: `
Un round de combat dure environ 6 secondes en temps fictif.

## Structure d'un tour

À votre tour, vous pouvez effectuer :
- **1 Action** (attaquer, lancer un sort, etc.)
- **1 Déplacement** (jusqu'à votre vitesse)
- **1 Action bonus** (si vous en avez une)
- **Interactions libres** (parler, dégainer une arme, etc.)

## Types d'actions

### Action
- Attaquer
- Lancer un sort
- Se précipiter (déplacement supplémentaire)
- Se défendre (+2 CA jusqu'au prochain tour)
- Aider un allié
- Se cacher
- Chercher

### Action bonus
Certaines capacités permettent d'utiliser une action bonus.

### Réaction
Répondre immédiatement à un déclencheur (1 par tour).
			`.trim()
		},
		{
			id: "movement",
			title: "Déplacement",
			content: `
## Vitesse de base

- **Humains, elfes, demi-elfes** : 9 mètres
- **Nains, halfelins** : 7,5 mètres

## Types de déplacement

### Déplacement normal
Vous pouvez vous déplacer jusqu'à votre vitesse à chaque tour.

### Terrain difficile
Chaque mètre coûte 1 mètre supplémentaire (vitesse divisée par 2).

### Se faufiler
Passer dans l'espace d'une créature hostile coûte 1 mètre supplémentaire par mètre parcouru.

## Actions de déplacement

### Se précipiter (Action)
Doublez votre vitesse de déplacement pour ce tour.

### Se retirer (Action)
Votre déplacement ne provoque pas d'attaques d'opportunité.
			`.trim()
		}
	]
};
