import type { RuleSection } from '../../../types.js';

export const actions: RuleSection = {
	id: "combat-actions",
	title: "Actions de combat",
	children: [
		{
			id: "attack-action",
			title: "Attaquer",
			content: `
L'action d'attaque vous permet de faire une attaque au corps à corps ou à distance.

## Jet d'attaque

**Jet d'attaque** = 1d20 + Modificateur de caractéristique + Bonus de maîtrise

### Modificateurs d'attaque
- **Corps à corps** : Force (ou Dextérité pour les armes de finesse)
- **À distance** : Dextérité

## Toucher la cible

Si votre jet d'attaque ≥ Classe d'Armure de la cible, vous touchez.

## Coup critique

Sur un 20 naturel au d20, doublez les dés de dégâts de l'arme.

**Exemple :** Une épée longue (1d8) devient 2d8 + modificateur de Force.

## Attaques multiples

Certaines classes obtiennent des attaques supplémentaires aux niveaux élevés.
			`.trim()
		},
		{
			id: "damage-healing",
			title: "Dégâts et soins",
			content: `
## Calculer les dégâts

**Dégâts** = Dés de l'arme + Modificateur de caractéristique

### Types de dégâts
- **Contondant** : Massues, marteaux
- **Perforant** : Épées, flèches
- **Tranchant** : Haches, épées

## Résistance et vulnérabilité

- **Résistance** : Dégâts divisés par 2
- **Vulnérabilité** : Dégâts doublés
- **Immunité** : Aucun dégât

## Points de vie et mort

### À 0 point de vie
- **Inconscient** et commence à faire des jets de sauvegarde contre la mort
- **Jet de mort** : 1d20, DD 10
  - 3 succès = Stabilisé
  - 3 échecs = Mort

### Soins
- Récupère des points de vie
- Ramène automatiquement à la conscience si à 0 PV

## Repos

### Repos court (1 heure)
- Dépenser des Dés de Vie pour récupérer des PV
- Récupérer certaines capacités

### Repos long (8 heures)
- Récupérer tous les PV et Dés de Vie
- Récupérer tous les emplacements de sorts
			`.trim()
		},
		{
			id: "special-actions",
			title: "Actions spéciales",
			content: `
## Attaque d'opportunité

Quand une créature hostile sort de votre allonge, vous pouvez utiliser votre **réaction** pour faire une attaque au corps à corps.

### Éviter les attaques d'opportunité
- Action "Se retirer"
- Téléportation
- Être repoussé contre sa volonté

## Bousculade

**Action :** Jet d'Athlétisme (Force) contesté contre Athlétisme (Force) ou Acrobaties (Dextérité) de la cible.

**Succès :** Repoussez la cible de 1,50 mètre.

## Renversement

**Action :** Jet d'Athlétisme (Force) contesté contre Athlétisme (Force) ou Acrobaties (Dextérité) de la cible.

**Succès :** La cible tombe à terre (état "à terre").

## Empoignade

**Action :** Jet d'Athlétisme (Force) contesté contre Athlétisme (Force) ou Acrobaties (Dextérité) de la cible.

**Succès :** La cible est empoignée (vitesse 0).

## Aider

**Action :** Donnez l'avantage au prochain jet d'un allié dans les 6 prochaines secondes.

## Se cacher

**Action :** Jet de Discrétion (Dextérité) contesté contre la Perception passive des ennemis.

**Succès :** Vous êtes caché (avantage à la prochaine attaque).
			`.trim()
		}
	]
};
