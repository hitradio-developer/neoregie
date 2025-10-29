import { getImagePath } from "@/lib/utils/imagePath";
import Image from "next/image";

const Trade = () => {
  return (
    <section className="overflow-hidden">
      <div className="container relative">
        <div className="bg-linear-to-r from-primary to-secondary hidden lg:block absolute w-full h-full top-1/2  blur-390"></div>
        <div className="grid lg:grid-cols-2 gap-x-5 items-center relative z-10">
          <div>
            <Image
              src={getImagePath("/images/trade/Carte-Afrique-Rouge.png")}
              alt="macBook-image"
              width={787}
              height={512}
            />
          </div>
          <div className="flex flex-col gap-7">
            <h2 className="font-semibold text-center sm:text-start max-w-96 leading-14">
              Hit Radio International
            </h2>
            <p className="lg:text-lg font-normal text-lightblue text-center sm:text-start">
              Depuis 2012, grâce à des partenariats Sud-Sud novateurs, le concept radiophonique Hit Radio s’est étendu à 11 pays subsahariens :
               République Centrafricaine, Burkina Faso, Congo Brazzaville, Sénégal, Togo, Gabon, Côte d’Ivoire, Burundi, Tchad, Niger et Comores. <br />
                Chaque programme est décliné par pays autour d’un même format de radio musicale de proximité qui offre un tremplin aux talents locaux et régionaux.
            </p>
            <div className="flex justify-between">
              <Image
                src={getImagePath("/images/trade/mac.svg")}
                alt="macOS-image"
                width={61}
                height={105}
              />
              <div className="verticalLine"></div>
              <Image
                src={getImagePath("/images/trade/appstore.svg")}
                alt="appstore-image"
                width={80}
                height={105}
              />
              <div className="verticalLine"></div>
              <Image
                src={getImagePath("/images/trade/windows.svg")}
                alt="windows-image"
                width={80}
                height={105}
              />
              <div className="verticalLine"></div>
              <Image
                src={getImagePath("/images/trade/android.svg")}
                alt="android-image"
                width={71}
                height={105}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trade;
