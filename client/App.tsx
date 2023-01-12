import React, { useState, useEffect } from "react";
import CountryList from "./CountryList";
import MultiSelectDropdown from "./MultiSelectDropdown";

export type Country = {
  name: string;
  logo: string;
  services: string[];
  country: string;
};

const App: React.FC = () => {
  const [cards, setCards] = useState<Country[] | null>(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(`http://localhost:3000/data`);
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        let actualData = await response.json();
        setCards(actualData);
        setError(null);
      } catch (err: any) {
        setError(err.message);
        setCards(null);
      }
    };
    getData();
  }, []);

  const [filterText, setFilterText] = useState<string>("");
  const [filterServices, setFilterServices] = useState<string[]>([]);

  return error ? (
    <div>Error: {error}</div>
  ) : (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div style={{ display: "flex" }}>
        <b>Name:&ensp;</b>
        <input
          type={"text"}
          onChange={(event) => setFilterText(event.target.value)}
        ></input>
      </div>
      <br />
      <div style={{ display: "flex" }}>
        <b>Service:&ensp;</b>
        <MultiSelectDropdown
          options={distinctServices(cards)}
          onSelectedChange={setFilterServices}
        />
      </div>
      <br />
      <CountryList
        filterText={filterText}
        filterServices={filterServices}
        cards={cards}
      />
    </div>
  );
};

const distinctServices = (cards: Country[] | null) => {
  const uniques = new Set<string>();
  if (cards) {
    for (const card of cards) {
      card.services.forEach(uniques.add, uniques);
    }
  }
  return Array.from(uniques);
};

export default App;
