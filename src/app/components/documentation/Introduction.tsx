"use client";

import { useState } from "react";

export const Introduction = () => {
  const [docNavbarOpen, setDocNavbarOpen] = useState(false);
  
  return (
    <>
      <div id="version" className="md:scroll-m-[180px] scroll-m-28">
        
        <div className="flex item-center justify-between">
          <h3 className=" text-2xl mt-4 font-semibold mb-6 text-white">
            Qui sommes nous ?
          </h3>
         
        </div>
       
        <div className="mt-5 text-xl leading-7 text-justify font-sans text-white/60 text-opacity-60">
          <p className="mb-4">
            Le Groupe a démarré ses activités avec le lancement réussi en 2006 d’une radio musicale ouverte sur le monde, à destination des auditeurs marocains : Hit Radio.
          </p>
          <p className="mb-4">
            Grâce à la diversité de ses programmes et un positionnement axé sur la musique, le divertissement et la liberté d’expression, Hit Radio est devenue au fil des années la radio de référence pour toute une génération avec plus de 3,4 millions d’auditeur quotidiens. Sa montée en puissance a fait d’elle aujourd’hui le plus grand
             réseau de diffusion avec 76 fréquences actives partout au Maroc.
          </p>
          <p className="mb-4">
            C’est en 2012 que le Groupe décide de lancer sa propre régie publicitaire basée à Casablanca dans le but d’assurer la commercialisation à titre exclusif de ses produits (radio, digital, web TV, opérations événementielles et d’autres produits dérivés). Forte de l’expertise de ses équipes et disposant des atouts nécessaires, Néorégie sert au mieux le marché publicitaire à travers des solutions de communication ciblées, 
            sur mesure et adaptées en fonction du contexte, des besoins et du budget.
          </p>
          <p className="mb-4">
            Ayant à son actif un important portefeuille client, tous secteurs confondus, 
            la régie a toujours fait preuve d’engagement auprès d’eux en alliant intégrité, performance et réactivité. Faisant de l’innovation le maître mot, Néorégie ne cesse de réagir aux nouvelles tendances en développant 
            continuellement de nouvelles idées pour répondre efficacement aux besoins de ses clients.
          </p>
          <p className="mb-4">
          Suivant le rythme des médias numériques, Hit Radio a créé plusieurs plateformes qui ont connu beaucoup de succès au point de devenir la 1ère communauté sur le digital. Grâce à une activité digitale très dynamique et la publication régulière de contenus diversifiés et adaptés, Hit Radio a pu réaliser des performances 100% organiques en générant des fans particulièrement 
          impliqués sur l’ensemble de ses espaces: réseaux sociaux, site web, application mobile …          
          </p>
          <p className="mb-4">
            La success story ne s’arrête pas là et le Groupe décide de développer une stratégie d’internationalisation,
             d’où son intérêt pour l’Afrique. Depuis 2012 et grâce à des partenariats Sud-Sud novateurs, le concept radiophonique Hit Radio s’est étendu à 13 pays subsahariens et continue encore, avec 100 fréquences au total et un bassin d’audience de 35 millions d’auditeurs : République Centrafricaine, Burkina Faso,
             Congo Brazzaville, Sénégal, Togo, Gabon, Côte d’Ivoire, Burundi, Tchad, Niger et Comores …
          </p>
        </div>
      </div>
      
    </>
  );
};
