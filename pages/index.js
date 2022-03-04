import Head from "next/head";
import { Fragment } from "react";
import Banner from "../Components/Banner";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import LargeCard from "../Components/LargeCard";
import MediumCard from "../Components/MediumCard";
import SmallCard from "../Components/SmallCard";
import LargeCardImage from '../public/assets/images/LargeCardImage.webp'

export default function Home({ exploreData, cardData }) {
  // console.log(cardData);
  return (
    <Fragment>
      <Head>
        <title>Airbnb</title>
      </Head>

      <Header />
      <Banner />

      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {exploreData?.map((item, i) => (
              <SmallCard
                img={item.img}
                distance={item.distance}
                location={item.location}
                key={i}
              />
            ))}
          </div>
        </section>

        
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Live Anywhere</h2>
          <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3">
            {cardData?.map((item, i) => (
              <MediumCard
                key={i}
                img={item.img}
                title={item.title}
              />
            ))}
          </div>
        </section>
        
        <LargeCard
          img={LargeCardImage}
          title="The Greatest Outdoors"
          description="Wishlists curated by Airbib."
          buttonText="Get Inspired"
        />
      </main>

      <Footer />
    </Fragment>
  )
}

// https://jsonkeeper.com/b/4G1G

export async function getStaticProps () {
  const exploreData = await fetch('https://jsonkeeper.com/b/4G1G').then(
    (res) => res.json()
  );

  const cardData = await fetch('https://jsonkeeper.com/b/VHHT').then(
    (res) => res.json()
  );

  return {
    props: {
      exploreData, cardData
    }
  }
}