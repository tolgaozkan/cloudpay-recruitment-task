import React, { useState, useEffect } from "react";
import { Country } from "./App";

type CountryCardsProps = {
  filterText: string;
  filterServices: string[];
  cards: Country[] | null;
};

type InternalCards = (Country & { servicesSet: Set<string> })[];

const CountryCards: React.FC<CountryCardsProps> = ({
  filterText,
  filterServices,
  cards,
}) => {
  const [internalCards, setInternalCards] = useState<InternalCards>([]);
  const [filteredInternalCards, setFilteredInternalCards] =
    useState<InternalCards>([]);
  const [count, setCount] = useState<number>(0);

  const filter = (cards: InternalCards) => {
    const filteredCards = cards
      ? cards.filter(
          ({ name, servicesSet }) =>
            (filterText
              ? name.toLowerCase().includes(filterText.toLowerCase())
              : true) &&
            (filterServices && !!filterServices.length
              ? isAllServicesAvailable(servicesSet)
              : true)
        )
      : [];

    setCount(filteredCards.length);
    setFilteredInternalCards(filteredCards);
  };

  useEffect(() => {
    const intCards = cards?.map((card) => ({
      ...card,
      servicesSet: new Set(card.services),
    })) as InternalCards;
    setInternalCards(intCards);
    filter(intCards);
  }, [cards]);

  useEffect(() => {
    filter(internalCards);
  }, [filterText, filterServices]);

  const isAllServicesAvailable = (servicesSet: Set<string>) => {
    for (const filterService of filterServices) {
      if (!servicesSet.has(filterService)) {
        return false;
      }
    }
    return true;
  };

  return (
    <>
      <div style={{ display: "flex" }}>
        <b>Count:&ensp;</b>
        <span>{count}</span>
      </div>
      <main className="cards">
        {filteredInternalCards &&
          filteredInternalCards.map(
            ({ name, logo, services, country }, index) => {
              return (
                <article key={index} className="card">
                  <img loading="lazy" src={logo} alt={`${name}-photo`} />
                  <div className="text">
                    <h4>{name}</h4>
                    <div>
                      <section>
                        <b>Services:</b> {services.join(" ,")}
                      </section>
                      <br></br>
                      <section>
                        <b>Country:</b> {country}
                      </section>
                    </div>
                  </div>
                </article>
              );
            }
          )}
      </main>
    </>
  );
};

export default CountryCards;
