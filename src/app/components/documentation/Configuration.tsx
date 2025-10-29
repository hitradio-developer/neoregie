import { ColorConfiguration } from "./ColorConfiguraion"
import { LogoConfiguration } from "./LogoConfiguration"
import { TypographyConfiguration } from "./TypographyConfiguration" 

export const Configuration = () => {
    return (
    <div
      id="configuration"
      className="md:scroll-m-[130px] scroll-m-28 relative z-10 before:absolute before:w-1/2 before:h-1/2 before:bg-linear-to-br before:from-primary before:to-secondary before:blur-390 before:z-0 before:-left-36"
    >
      <div className="relative z-10">
        <h3 className="text-2xl font-semibold mt-8 text-white">
          NEOREGIE DANS LE TEMPS
        </h3>
        <div className="rounded-md p-6 pt-3 border border-white mt-6">
          <section className="relative  flex flex-col justify-center  overflow-hidden">
              <div className="">
                  <div className="flex flex-col justify-center divide-y divide-slate-200">
                      <div className="w-full max-w-3xl mx-auto">
                          <div className="-my-6">
                              <div className="relative pl-8 sm:pl-32 py-6 group">
                                  <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                                      <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold w-24 h-10 mb-3 sm:mb-0 text-red-600 bg-white rounded-full">14 Mars, 2019</time>
                                      <div className="text-xl font-bold text-white">Changement de direction</div>
                                  </div>
                                  <div className="text-slate-500">
                                  Depuis mai 2019, Néorégie s’est doté d’un nouveau directeur, en charge de piloter l’activité régie publicitaire et de développer de nouveaux produits / services. <br />
                                  Boubker Belghazi a rejoint l’équipe Néorégie après 17 ans d’expérience dans le développement & l’accompagnement d’activités commerciales et logistiques dans un environnement national et international.
                                    </div>
                              </div>
                              
                              <div className="relative pl-8 sm:pl-32 py-6 group">
                                  <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                                      <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold w-24 h-10 mb-3 sm:mb-0 text-red-600 bg-white rounded-full">23 Avril, 2021</time>
                                      <div className="text-xl font-bold text-white">Les forces du média radio</div>
                                  </div>
                                  <div className="text-slate-500"></div>
                              </div>
                              
                              <div className="relative pl-8 sm:pl-32 py-6 group">
                                
                                  <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                                      <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold w-24 h-10 mb-3 sm:mb-0 text-red-600 bg-white rounded-full">03 Avril, 2022</time>
                                      <div className="text-xl font-bold text-white">Fondée</div>
                                  </div>
                                  <div className="text-slate-500"></div>
                              </div>
                          </div>
                      </div>

                  </div>
              </div>
          </section>
        </div>
      </div>
    </div>
  );
}