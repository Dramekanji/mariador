import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <section>
      {/* Banner */}
      <div className="bg-about bg-center bg-about-banner bg-cover h-[560px] relative flex justify-center items-center">
        {/* Overlay */}
        <div className="absolute w-full h-full bg-black/70"></div>
        {/* Title */}
        <h1
          className="text-6xl z-10 font-primary text-center text-white sm:text-5xl md:text-6xl"
          style={{ whiteSpace: "pre-line" }}
        >
          Decouvrez{"\n"}Hotel Mariador Park
        </h1>
      </div>
      <div className="container mx-auto p-6">
        <h2 className="text-4xl font-primary mt-12 mb-6">
          Bienvenue à Hotel Mariador Park
        </h2>
        <p className="text-lg mb-8">
          {/* eslint-disable react/no-unescaped-entities */}À Hotel Mariador
          Park, nous sommes fiers de créer des souvenirs et des expériences
          inoubliables pour nos clients. Dès votre arrivée, vous serez plongé
          dans une atmosphère de luxe, de détente et d'aventure. Nos environs
          naturels immaculés, nos équipements de classe mondiale et notre
          service exceptionnel se combineront pour rendre votre séjour vraiment
          remarquable. Que vous savouriez une cuisine exquise préparée par nos
          talentueux chefs, que vous vous lanciez dans des aventures
          passionnantes ou que vous vous relaxiez simplement dans le calme
          absolu, chaque instant ici est conçu pour laisser une impression
          durable.
          {/* eslint-enable react/no-unescaped-entities */}
        </p>
        <p className="text-lg mb-8">
          {/* eslint-disable react/no-unescaped-entities */}
          Notre équipe dévouée de professionnels s'engage à aller au-delà pour
          s'assurer que votre visite est rien de moins qu'extraordinaire. Des
          services de conciergerie personnalisés aux activités et excursions
          méticuleusement conçues, nous visons à adapter chaque aspect de votre
          séjour à vos désirs et préférences. À notre complexe touristique, vous
          apprécierez non seulement un havre de confort, mais vous créerez
          également des souvenirs chéris qui resteront avec vous toute votre
          vie. Votre temps avec nous n'est pas seulement des vacances ; c'est un
          voyage inoubliable de découverte et de délice.
          {/* eslint-enable react/no-unescaped-entities */}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div>
            <h3 className="text-2xl font-primary mb-4">Notre Mission</h3>
            <p className="text-lg">
              {/* eslint-disable react/no-unescaped-entities */}
              Notre mission est de fournir à nos clients une expérience
              inoubliable, offrant le mélange parfait de détente, d'aventure et
              de luxe. Nous nous engageons à garantir que votre séjour soit
              rempli de merveilleux souvenirs qui dureront toute une vie.
              {/* eslint-enable react/no-unescaped-entities */}
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-primary mb-4">Notre Vision</h3>
            <p className="text-lg">
              {/* eslint-disable react/no-unescaped-entities */}
              Notre vision est de devenir complexe touristique le mieux notée,
              reconnue pour son service exceptionnel, son environnement naturel
              époustouflant et ses équipements de classe mondiale. Nous visons à
              créer un havre de confort et de tranquillité pour tous nos
              clients.{/* eslint-enable react/no-unescaped-entities */}
            </p>
          </div>
        </div>
        <h2 className="text-4xl font-primary mt-12 mb-6">Notre Equipe</h2>
        <p className="text-lg mb-8">
          {/* eslint-disable react/no-unescaped-entities */}
          Notre équipe dévouée de professionnels est là pour s'assurer que votre
          séjour est synonyme de perfection. De nos chefs qui préparent une
          cuisine exquise à notre équipe de conciergerie prête à vous assister
          pour toute demande, chaque membre de notre personnel s'engage à rendre
          votre visite extraordinaire.
          {/* eslint-enable react/no-unescaped-entities */}
        </p>
        <h2 className="text-4xl font-primary mt-12 mb-6">Gallery</h2>
        {/* Add image gallery here */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="relative h-80">
            <Image
              src="/images/pool.jpeg"
              alt="Resort Image 1"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="relative h-80">
            <Image
              src="/images/basketball-court.jpeg"
              alt="Resort Image 2"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="relative h-80">
            <Image
              src="/images/petting-zoo.jpeg"
              alt="Resort Image 3"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="relative h-80">
            <Image
              src="/images/maf-village1.jpeg"
              alt="Resort Image 4"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="relative h-80">
            <Image
              src="/images/huts.jpeg"
              alt="Resort Image 5"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="relative h-80">
            <Image
              src="/images/huts2.jpeg"
              alt="Resort Image 6"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
