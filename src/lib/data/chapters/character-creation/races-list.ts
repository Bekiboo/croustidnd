import type { RuleSection } from '../../../types.js';

export const racesList: RuleSection = {
	id: "races-list",
	title: "Les races classiques",
	content: `
# Races

## Humain
- **Bonus/Malus :** +1 à deux caractéristiques au choix  
- **Traits obligatoires :** Taille Moyenne, Vitesse 9 m  
- **Description :** Polyvalents et adaptables, les humains n'excellent dans rien mais s'en sortent partout.  

## Elfe
- **Bonus/Malus :** +2 Dextérité, -1 Constitution  
- **Traits obligatoires :** Taille Moyenne, Vision dans le noir (18 m), Vitesse 9 m  
- **Description :** Élégants et sensibles à la magie, mais physiquement plus fragiles.  

## Nain
- **Bonus/Malus :** +2 Constitution, -1 Charisme  
- **Traits obligatoires :** Taille Moyenne, Vitesse 7,5 m, Vision dans le noir (18 m)  
- **Description :** Solides et robustes, mais peu gracieux et directs dans leurs relations sociales.  

## Halfelin
- **Bonus/Malus :** +2 Dextérité, -1 Force  
- **Traits obligatoires :** Petite Taille, Vitesse 7,5 m  
- **Description :** Agiles et discrets, mais physiquement moins puissants.  

## Demi-Orc
- **Bonus/Malus :** +2 Force, -1 Intelligence  
- **Traits obligatoires :** Taille Moyenne, Vision dans le noir (18 m), Vitesse 9 m  
- **Description :** Puissants combattants, mais peu portés sur l'érudition.  

## Gnome
- **Bonus/Malus :** +2 Intelligence, -1 Force  
- **Traits obligatoires :** Petite Taille, Vitesse 7,5 m, Vision dans le noir (18 m)  
- **Description :** Curieux et ingénieux, mais chétifs.  

## Demi-elfe
- **Bonus/Malus :** +2 Charisme, +1 à une caractéristique au choix, -2 Constitution  
- **Traits obligatoires :** Taille Moyenne, Vision dans le noir (18 m), Vitesse 9 m  
- **Description :** Dotés de la grâce elfique et de la polyvalence humaine, mais leur héritage divisé les rend plus vulnérables physiquement.  
	`.trim()
};
