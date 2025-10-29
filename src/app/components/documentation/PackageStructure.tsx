import { Icon } from "@iconify/react/dist/iconify.js";

export const PackageStructure = () => {
  
  return (
    <div
      id="structure"
      className="md:scroll-m-[130px] scroll-m-28 relative z-10 before:absolute before:w-1/2 before:h-1/2 before:bg-linear-to-br before:from-primary before:to-secondary before:blur-390 before:z-0 before:-left-36"
    >
      <h3 className=" text-white text-2xl font-semibold mt-8 mb-6">Les types d'offres</h3>
      <div className="flex  items-center justify-center ">
        <div className="space-y-6 border-l-2 border-dashed">
          <div className="relative w-full">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="absolute -top-0.5 z-10 -ml-3.5 h-7 w-7 rounded-full text-red-600">
              <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd" />
            </svg>
            <div className="ml-6">
              <h4 className="font-bold text-red-600">Campagne :</h4>
              <p className="mt-2 max-w-screen-sm text-sm text-white">diffuser des spots publicitaires selon un plan média adapté. Dans un environnement éditorial particulièrement riche et diversifié, la publicité classique représente une prise de parole exceptionnelle qui permet de générer du trafic donc des ventes.</p>
            </div>
          </div>
          <div className="relative w-full">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="absolute -top-0.5 z-10 -ml-3.5 h-7 w-7 rounded-full text-red-600">
              <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd" />
            </svg>
            <div className="ml-6">
              <h4 className="font-bold text-red-600">Sponsoring : </h4>
              <p className="mt-2 max-w-screen-sm text-sm text-white">Aliquam tincidunt malesuada tortor vitae iaculis. In eu turpis iaculis, feugiat risus quis, aliquet urna. Quisque fringilla mollis risus, eu pulvinar dolor.</p>
              <span className="mt-1 block text-sm font-semibold text-blue-500">2007</span>
            </div>
          </div>
          <div className="relative w-full">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="absolute -top-0.5 z-10 -ml-3.5 h-7 w-7 rounded-full text-red-600">
              <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd" />
            </svg>
            <div className="ml-6">
              <h4 className="font-bold text-red-600">Opération spéciale :</h4>
              <p className="mt-2 max-w-screen-sm text-sm text-white">Aliquam tincidunt malesuada tortor vitae iaculis. In eu turpis iaculis, feugiat risus quis, aliquet urna. Quisque fringilla mollis risus, eu pulvinar dolor</p>
            </div>
          </div>
        
        </div>
      </div>
      <h3 className=" text-white text-2xl font-semibold mt-8">Notre équipe</h3>
      <div className="p-6 rounded-md border mt-6 border-white/60">
        <p className="text-base font-medium text-white/60 text-opacity-60 text-justify leading-10">
          Une équipe multi talents pour vous apportez une expertise média de la grande distribution aux marques de luxe, des grandes institutions aux petites entreprises. <br />
           Une organisation tournée vers la vente conseil avec un service commercial,
          marketing, administration des ventes et planification publicitaire.
        </p>
      </div>
      
    </div>
  );
};
