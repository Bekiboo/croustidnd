import type { RuleSection } from '../../../types.js';

export const skills: RuleSection = {
	id: "character-skills",
	title: "Compétences",
	children: [
		{
			id: "skill-system",
			title: "Système de compétences",
			content: `
Les compétences représentent les domaines d'expertise de votre personnage.

## Bonus de compétence

**Jet de compétence** = 1d20 + Modificateur de caractéristique + Bonus de maîtrise (si maîtrisé)

## Bonus de maîtrise par niveau

- **Niveaux 1-4** : +2
- **Niveaux 5-8** : +3
- **Niveaux 9-12** : +4
- **Niveaux 13-16** : +5
- **Niveaux 17-20** : +6

## Maîtrise vs Non-maîtrise

- **Maîtrisé** : Ajoutez votre bonus de maîtrise
- **Non-maîtrisé** : Utilisez seulement le modificateur de caractéristique
			`.trim()
		},
		{
			id: "physical-skills",
			title: "Compétences physiques",
			content: `
## Acrobaties (Dextérité)
Garder l'équilibre, faire des cascades, se faufiler dans des espaces étroits.

**Exemples d'utilisation :**
- Marcher sur une corde raide
- Éviter une chute en se rattrapant
- Passer à travers un espace occupé par un ennemi

## Athlétisme (Force)
Escalader, nager, sauter, et autres activités physiques exigeantes.

**Exemples d'utilisation :**
- Escalader un mur ou une falaise
- Nager contre un courant fort
- Sauter par-dessus un fossé
- Enfoncer une porte

## Discrétion (Dextérité)
Se cacher et se déplacer silencieusement sans être détecté.

**Exemples d'utilisation :**
- Se cacher derrière un obstacle
- Suivre quelqu'un sans être vu
- Voler à la tire
- S'approcher d'un ennemi sans bruit
			`.trim()
		},
		{
			id: "mental-skills",
			title: "Compétences mentales",
			content: `
## Arcanes (Intelligence)
Connaissance de la magie, des sorts, des objets magiques et des plans d'existence.

## Histoire (Intelligence)
Connaissance des événements historiques, des légendes et des cultures anciennes.

## Investigation (Intelligence)
Rechercher des indices, analyser des preuves et résoudre des mystères.

## Nature (Intelligence)
Connaissance de la faune, de la flore, du climat et des cycles naturels.

## Religion (Intelligence)
Connaissance des divinités, des rites religieux et des plans divins.

## Médecine (Sagesse)
Diagnostiquer des maladies, traiter des blessures et stabiliser les mourants.

**Utilisation spéciale :** DD 10 pour stabiliser un personnage à 0 PV.
			`.trim()
		},
		{
			id: "social-skills",
			title: "Compétences sociales",
			content: `
## Persuasion (Charisme)
Influencer quelqu'un par la diplomatie, la négociation ou l'argumentation.

**Exemples d'utilisation :**
- Convaincre un garde de vous laisser passer
- Négocier un prix avec un marchand
- Rallier des alliés à votre cause

## Tromperie (Charisme)
Mentir de manière convaincante, créer de fausses identités et induire en erreur.

**Exemples d'utilisation :**
- Mentir sans se faire prendre
- Se faire passer pour quelqu'un d'autre
- Bluffer au poker

## Intimidation (Charisme)
Influencer quelqu'un par la menace, l'hostilité ou la violence implicite.

**Exemples d'utilisation :**
- Faire parler un prisonnier
- Effrayer des bandits pour qu'ils fuient
- Obtenir des informations par la peur

## Représentation (Charisme)
Divertir un public par la musique, la danse, l'art oratoire ou d'autres formes artistiques.
			`.trim()
		},
		{
			id: "perception-skills",
			title: "Compétences de perception",
			content: `
## Perception (Sagesse)
Remarquer des détails dans votre environnement par la vue, l'ouïe ou d'autres sens.

**Utilisation passive :** Votre Perception passive = 10 + modificateur de Sagesse + bonus de maîtrise

**Exemples d'utilisation :**
- Repérer une embuscade
- Entendre des conversations à travers une porte
- Remarquer un piège ou un passage secret

## Perspicacité (Sagesse)
Déterminer les véritables intentions de quelqu'un, discerner les mensonges et lire le langage corporel.

**Exemples d'utilisation :**
- Détecter si quelqu'un ment
- Comprendre l'humeur de quelqu'un
- Anticiper les actions d'un adversaire

## Survie (Sagesse)
Pister des créatures, naviguer en terrain sauvage et survivre dans des environnements hostiles.

**Exemples d'utilisation :**
- Suivre des traces
- Trouver de la nourriture et de l'eau
- Prédire le temps qu'il va faire
- Éviter de se perdre
			`.trim()
		}
	]
};
