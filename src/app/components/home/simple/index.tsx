import Link from 'next/link'

const Simple = () => {
  return (
    <section className='bg-simple-bg relative before:absolute before:w-full before:h-full before:bg-arrow-bg before:bg-no-repeat before:top-10'>
      <div className=''>
        <div className='container relative z-10'>
          <div className='max-w-2xl mx-auto'>
            <h2 className='text-center font-semibold mb-6 sm:leading-16 capitalize'>
                Quelques chiffres
            </h2>
            <p className='text-center text-lightpurple text-lg font-normal mb-8'>
                Néorégie s’appuie sur la puissance du média radio et digital pour répondre à vos objectifs de communication ciblés.            </p>
          </div>
          <div className="grid md:grid-cols-2 xl:grid-cols-3 lg:grid-cols-3 gap-x-10 gap-y-4 -right-1/4">
            <div
              className="bg-darkmode p-8 rounded-lg text-center flex flex-col gap-3">
              <div className="rounded-full bg-linear-to-r from-red-400 to-red-800 hover:from-red-800 hover:to-red-400 w-fit p-4 flex items-center justify-center">
                <img
                  src="/images/work/web-link.svg"
                  alt="items"
                  width={60}
                  height={60}
                  className=""
                />
              </div>
              <h5 className="text-white/80 text-2xl font-medium capitalize underline">
                300K
              </h5>
              <p className="text-white/40 text-sm font-normal">
                Pages vues sur le site web                         
              </p>
            </div>
            <div
              className="bg-darkmode p-8 rounded-lg flex flex-col gap-3 text-center">
              <div className="rounded-full bg-linear-to-r from-red-400 to-red-800 hover:from-red-800 hover:to-red-400 w-fit p-4 flex items-center justify-center">
                <img
                  src="/images/work/app-svgrepo-com.svg"
                  alt="items"
                  width={60}
                  height={60}
                  className=""
                />
              </div>
              <h5 className="text-white/80 text-2xl font-medium capitalize underline">
                450K
              </h5>
              <p className="text-white/40 text-sm font-normal">
              Téléchargements des applications mobiles                           
              </p>
            </div>
            <div
              className="bg-darkmode p-8 rounded-lg flex flex-col gap-3 text-center">
              <div className="rounded-full bg-linear-to-r from-red-400 to-red-800 hover:from-red-800 hover:to-red-400 w-fit p-4 flex items-center justify-center">
                <img
                  src="/images/work/user-shield-alt-1-svgrepo-com.svg"
                  alt="items"
                  width={60}
                  height={60}
                  className=""
                />
              </div>
              <h5 className="text-white/80 text-2xl font-medium capitalize underline">
                3 M              
              </h5>
              <p className="text-white/40 text-sm font-normal">
              Auditeurs quotidiens au Maroc                           
              </p>
            </div>
             <div
              className="bg-darkmode p-8 rounded-lg text-center flex flex-col gap-3">
              <div className="rounded-full bg-linear-to-r from-red-400 to-red-800 hover:from-red-800 hover:to-red-400 w-fit p-4 flex items-center justify-center">
                <img
                  src="/images/work/facebook.svg"
                  alt="items"
                  width={60}
                  height={60}
                  className=""
                />
              </div>
              <h5 className="text-white/80 text-2xl font-medium capitalize underline">
                3,4 M
              </h5>
              <p className="text-white/40 text-sm font-normal">
                Fans sur Facebook                         
              </p>
            </div>
            <div
              className="bg-darkmode p-8 rounded-lg flex flex-col gap-3 text-center">
              <div className="rounded-full bg-linear-to-r from-red-400 to-red-800 hover:from-red-800 hover:to-red-400 w-fit p-4 flex items-center justify-center">
                <img
                  src="/images/work/instagram.svg"
                  alt="items"
                  width={60}
                  height={60}
                  className=""
                />
              </div>
              <h5 className="text-white/80 text-2xl font-medium capitalize underline">
                1,2 M
              </h5>
              <p className="text-white/40 text-sm font-normal">
              Followers Instagram                           
              </p>
            </div>
            <div
              className="bg-darkmode p-8 rounded-lg flex flex-col gap-3 text-center">
              <div className="rounded-full bg-linear-to-r from-red-400 to-red-800 hover:from-red-800 hover:to-red-400 w-fit p-4 flex items-center justify-center">
                <img
                  src="/images/work/youtube.svg"
                  alt="items"
                  width={60}
                  height={60}
                  className=""
                />
              </div>
              <h5 className="text-white/80 text-2xl font-medium capitalize underline">
                1,6 M              
              </h5>
              <p className="text-white/40 text-sm font-normal">
              Vues YouTube                           
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Simple
