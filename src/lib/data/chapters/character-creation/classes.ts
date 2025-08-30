import type { RuleSection } from '../../../types.js';

export const classes: RuleSection = {
	id: "character-classes",
	title: "Classes",
	children: [
		{
			id: "fighter",
			title: "Guerrier",
			content: `
Le guerrier est un combattant polyvalent maîtrisant toutes les armes et armures.

## Caractéristiques principales

- **Caractéristique principale** : Force ou Dextérité
- **Dé de vie** : d10
- **Jets de sauvegarde maîtrisés** : Force, Constitution

## Aptitudes de classe

### Niveau 1
- **Points de vie** : 10 + modificateur de Constitution
- **Maîtrises** : Toutes les armures, boucliers, armes simples et de guerre
- **Style de combat** : Choisissez une spécialisation

### Niveaux supérieurs
- **Action supplémentaire** (niveau 5) : Une attaque supplémentaire par tour
- **Indomptable** (niveau 9) : Relancer un jet de sauvegarde raté par repos long

## Styles de combat (niveau 1)

- **Archerie** : +2 aux jets d'attaque à distance
- **Défense** : +1 à la CA en armure
- **Duel** : +2 aux dégâts avec une arme à une main sans autre arme
- **Armes à deux mains** : Relancer les 1 et 2 aux dés de dégâts
			`.trim()
		},
		{
			id: "wizard",
			title: "Magicien",
			content: `
Le magicien étudie les arcanes et lance des sorts grâce à son intelligence.

## Caractéristiques principales

- **Caractéristique principale** : Intelligence
- **Dé de vie** : d6
- **Jets de sauvegarde maîtrisés** : Intelligence, Sagesse

## Aptitudes de classe

### Niveau 1
- **Points de vie** : 6 + modificateur de Constitution
- **Maîtrises** : Dagues, fléchettes, frondes, bâtons, arbalètes légères
- **Sorts** : 3 tours de magie + 2 sorts de niveau 1
- **Grimoire** : Contient vos sorts connus

### Rituels
Les magiciens peuvent lancer certains sorts comme rituels (temps de lancement +10 minutes, pas d'emplacement de sort consommé).

## École de magie (niveau 2)

Choisissez une spécialisation :
- **Évocation** : Sorts de dégâts
- **Abjuration** : Sorts de protection
- **Divination** : Sorts d'information
- **Enchantement** : Sorts de contrôle mental
			`.trim()
		},
		{
			id: "rogue",
			title: "Roublard",
			content: `
Le roublard excelle dans la discrétion, les compétences et les attaques sournoises.

## Caractéristiques principales

- **Caractéristique principale** : Dextérité
- **Dé de vie** : d8
- **Jets de sauvegarde maîtrisés** : Dextérité, Intelligence

## Aptitudes de classe

### Niveau 1
- **Points de vie** : 8 + modificateur de Constitution
- **Maîtrises** : Armures légères, armes simples, épées courtes, rapières, arbalètes de poing
- **Attaque sournoise** : +1d6 dégâts supplémentaires dans certaines conditions
- **Argot des voleurs** : Langage secret des criminels

### Conditions d'attaque sournoise
- Avoir l'avantage sur le jet d'attaque
- OU la cible est à 1,50 m d'un allié conscient (sans désavantage)

## Expertise (niveau 1)

Double bonus de maîtrise sur deux compétences au choix.

## Archétypes de roublard (niveau 3)

- **Voleur** : Escalade et acrobaties améliorées
- **Assassin** : Spécialiste de l'élimination discrète
- **Mystique** : Magie limitée et talents surnaturels
			`.trim()
		},
		{
			id: "cleric",
			title: "Clerc",
			content: `
Le clerc tire sa magie divine d'une divinité et peut soigner ou bénir ses alliés.

## Caractéristiques principales

- **Caractéristique principale** : Sagesse
- **Dé de vie** : d8
- **Jets de sauvegarde maîtrisés** : Sagesse, Charisme

## Aptitudes de classe

### Niveau 1
- **Points de vie** : 8 + modificateur de Constitution
- **Maîtrises** : Armures légères et intermédiaires, boucliers, armes simples
- **Sorts** : 3 tours de magie + 2 sorts de niveau 1
- **Canalisation d'énergie divine** : Pouvoir spécial 1/repos court

### Domaine divin (niveau 1)

Choisissez le domaine de votre divinité :
- **Vie** : Soins et protection
- **Lumière** : Sorts de feu et de radiance
- **Guerre** : Combat et stratégie
- **Nature** : Connexion avec le monde naturel

## Canalisation d'énergie divine

Effet dépendant du domaine choisi :
- **Vie** : Soigner 2d6 + niveau du clerc PV à tous les alliés à 9 m
- **Lumière** : Aveugler les ennemis dans un rayon de 9 m
			`.trim()
		}
	]
};
