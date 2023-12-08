const hist = {
    1: {titre:"L\'odyssée des Énergies Renouvelables", text:"Sur une planète lointaine, les habitants dépendaient d'une source d'énergie puissante mais polluante. Quand ils découvrirent les avantages des énergies renouvelables, une équipe d'explorateurs entreprit un voyage pour collecter les ressources nécessaires à la construction de nouvelles technologies propres. En surmontant des obstacles et en adoptant des pratiques respectueuses de l'environnement, ils réussirent à transformer leur planète, créant ainsi un avenir durable."},
    2: {titre:"Les Gardiensde la Forêt Désolée", text:"Dans un futur où la déforestation avait transformé autrefois une luxuriante forêt en un désert aride, un groupe d'animaux décidèrent de devenir les Gardiens de la Forêt. Avec l'aide d'une jeune scientifique passionnée, ils mirent en œuvre des projets de reboisement, adoptèrent des pratiques durables et enseignèrent aux humains l'importance de respecter la nature. Peu à peu, la forêt commença à revivre, démontrant que même dans les temps difficiles, des changements positifs peuvent survenir."},
    3: {titre:"Le Voyage du Petit Glacier", text:"Dans un royaume lointain, un petit glacier du nom de Glacio se sentit perdu et triste alors qu'il commençait à fondre à cause du réchauffement climatique. Il entreprit un voyage pour trouver le légendaire \"Cristal du Froid Éternel\" afin de sauver son foyer. En chemin, il rencontra des animaux et des humains qui l'aidèrent à comprendre l'importance de la conservation de l'énergie et des ressources. Ensemble, ils trouvèrent des moyens créatifs de protéger le glacier et de ralentir son processus de fonte."},
    4: {titre:"La Quête des Éléments Perdus", text:"Il était une fois, dans un monde magique, les quatre éléments vivaient en harmonie. Cependant, un jour, le changement climatique commença à perturber cet équilibre. Les héros de notre histoire, une petite goutte d'eau, une flamme vacillante, un souffle d'air et un morceau de terre, partirent en quête pour retrouver les éléments perdus et restaurer l'harmonie. À travers des aventures passionnantes, ils découvrirent comment les activités humaines pouvaient affecter le monde magique et apprirent des leçons importantes sur la préservation de l'environnement."}
}

function histoire() {
    var bd = document.getElementById("bd");
    var newParagraph = document.createElement("p");
    var cont = document.createElement("p");
    bd.innerHTML = '';
    const index = Math.floor(Math.random() * 4) + 1;
    newParagraph.textContent = hist[index]['titre'];
    cont.textContent = hist[index]['text'];
    bd.appendChild(newParagraph);
    bd.appendChild(cont);
    
}
//histoire()