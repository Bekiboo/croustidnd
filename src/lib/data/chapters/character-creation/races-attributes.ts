import type { RuleSection } from '../../../types.js';

export const racesAttributes: RuleSection = {
	id: "races-attributes",
	title: "Attributs achetables",
	content: `
# Attributs achetables
Chaque personnage dispose d'une liste d'attributs optionnels qu'il peut acheter pour personnaliser davantage son profil.

- Certains attributs coûtent des points, d'autres en rapportent (traits négatifs).
- Un joueur ne peut pas choisir plus de **2 traits négatifs**.
- Les attributs sont divisés en deux catégories :
  - **Tronc commun** : accessibles à toutes les races
  - **Spécifiques à une race** : réservés à une race particulière

## Tronc commun
- **Ambidextre** (−2 points) : ignore la pénalité de main non-directrice.  
- **Chance insolente** (−2 points) : une fois par session, relance un jet raté.  
- **Dur à cuire** (−2 points) : +1 PV par niveau.  
- **Volonté de fer** (−2 points) : +2 aux jets de sauvegarde contre la peur.  
- **Rapide** (−2 points) : vitesse augmentée de 1,5 m.  
- **Savant** (−2 points) : +2 en Connaissance au choix.  
- **Séducteur** (−2 points) : +2 aux tests de Charisme en interaction sociale.  
- **Œil de lynx** (−2 points) : +2 en Perception.  
- **Réflexes éclairs** (−2 points) : +2 à l'initiative.  
- **Ténacité** (−2 points) : ignore la première fois qu'il tomberait inconscient (0 PV).  
- **Chétif** (+2 points) : −1 Constitution.  
- **Maladroit** (+2 points) : −1 Dextérité.  
- **Myope** (+2 points) : −2 Perception à distance.  
- **Lent** (+2 points) : vitesse réduite de 1,5 m.  
- **Gourmand** (+2 points) : doit manger le double de ration/jour.  
- **Malchanceux** (+2 points) : une fois par session, le MJ peut forcer une relance d'un jet réussi.  

## Spécifiques par race

### Humain
- **Leader-né** (−3 points) : +1 aux jets d'initiative de tous les alliés à 6 m.  
- **Persévérant** (−2 points) : une fois par combat, ignore les effets d'un échec critique.  

### Elfe
- **Magie innée** (−3 points) : lance un sort mineur par jour (sans dépenser d'emplacement).  
- **Mémoire ancestrale** (−2 points) : +2 à un jet de Connaissance par session.  
- **Artisan** (−2 points) : +2 aux jets d'Artisanat.  

### Nain
- **Résistance aux poisons** (−2 points) : avantage aux jets contre empoisonnement.  
- **Maître forgeron** (−3 points) : réduit le coût de création d'objets en métal de 25%.  
- **Endurance** (−2 points) : ignore les effets de la fatigue pendant 1 heure.  

### Halfelin
- **Chanceux** (−3 points) : relance automatiquement les 1 naturels.  
- **Discrétion** (−2 points) : +2 aux jets de Discrétion.  
- **Résistance à la peur** (−2 points) : avantage aux jets contre la peur.  

### Demi-Orc
- **Rage** (−3 points) : une fois par combat, +2 Force et Constitution pendant 3 tours.  
- **Intimidant** (−2 points) : +2 aux jets d'Intimidation.  
- **Résistance à la douleur** (−2 points) : ignore le premier niveau de blessure.  

### Gnome
- **Inventeur** (−3 points) : peut créer des gadgets temporaires.  
- **Résistance magique** (−2 points) : +2 aux jets de sauvegarde contre la magie.  
- **Petite taille, grand esprit** (−2 points) : +1 point de sort par niveau.  

### Demi-elfe
- **Charisme naturel** (−3 points) : relance automatiquement les échecs en social.  
- **Adaptabilité** (−2 points) : peut choisir une compétence supplémentaire au niveau 1.  
- **Vision perçante** (−2 points) : voit à travers les illusions mineures.  
	`.trim()
};
