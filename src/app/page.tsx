import { Metadata } from "next";
import Banner from "./components/home/hero";
import Companies from "./components/home/companies";
import Work from "./components/home/work";
import Table from "./components/home/table";
import Features from "./components/home/features";
import Simple from "./components/home/simple";
import Trade from "./components/home/trade";
import Faq from "./components/home/faq";
import ContactForm from "./components/ContactForm";



export const metadata: Metadata = {
  title: 'NEOREGIE | Régie publicitaire',
  description:
    "Hit Radio",
  keywords: [
    // Français
    'hit radio',
    // Anglais
    
    // Arabe
    
  ],
  robots: 'index, follow',
  openGraph: {
    title: 'NEOREGIE | Régie publicitaire',
    description:
      "Écoutez Hit Radio en direct : les meilleurs hits marocains et internationaux, interviews, concours et actualité musicale.",
    url: 'https://www.neoregie.ma',
    siteName: 'NEOREGIE',
    type: 'website',
    // images: [
    //   {
    //     url: 'https://www.hitradio.ma/logo-hitradio.png', // mettre le bon logo
    //     width: 1200,
    //     height: 630,
    //     alt: 'Hit Radio'
    //   }
    // ]
  }
};

export default function Home() {
  return (
    <main>
       
      <Banner/>
      <Companies />
      <Work />
      {/* <Table /> */}
      <Features />
      <Simple />
      <Trade />
      <Faq />
      <ContactForm />
    </main>
  );
}
