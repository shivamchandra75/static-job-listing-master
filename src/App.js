import { data } from "autoprefixer";
import React, { useState } from "react";
import "./App.css";
import Card from "./Components/card";
import FilteredDiv from "./Components/FilteredDiv";
import dataArray from "./Data";

function App() {
  const [filteredCard, setFilteredCard] = useState(dataArray);
  const [filteredArrBtns, setFilteredArrBtns] = useState([]);

  //Conditionaly rendering FilterDiv and passing some props
  function renderFilterDiv() {
    if (filteredArrBtns.length !== 0) {
      return (
        <FilteredDiv
          setFilteredCard={setFilteredCard}
          filteredArrBtns={filteredArrBtns}
          setFilteredArrBtns={setFilteredArrBtns}
        />
      );
    }
  }

  const cards = filteredCard.map((data) => {
    return (
      <Card
        key={data.id}
        img={data.logo}
        company={data.company}
        isNew={data.new}
        isFeatured={data.featured}
        position={data.position}
        role={data.role}
        level={data.level}
        postedAt={data.postedAt}
        contract={data.contract}
        location={data.location}
        languages={data.languages}
        tools={data.tools}
        filteredCard={filteredCard}
        setFilteredCard={setFilteredCard}
        filteredArrBtns={filteredArrBtns}
        setFilteredArrBtns={setFilteredArrBtns}
      />
    );
  });

  return (
    <div className="root-container relative max-h-full min-h-screen bg-[#effafa] pb-8">
      <div className="App mb-8 h-40 bg-[#5ba4a4]">
        <div className="h-40 bg-[url('/public/images/bg-header-mobile.svg')] bg-cover bg-no-repeat lg:bg-[url('/public/images/bg-header-desktop.svg')] "></div>
      </div>
      {renderFilterDiv()}
      {cards}
    </div>
  );
}

export default App;

// function clear() {
//   const arr = [];
//   let givenArr = ["Frontend", "Junior"];
//   let arrToLoop = dataArray;

//   givenArr.forEach((element, index) => {
//     arrToLoop.forEach((obj) => {
//       for (const key in obj) {
//         if (typeof obj[key] !== typeof arr)
//           if (obj[key] === element) arr.push(obj);
//       }
//     });
//     arrToLoop = arr;
//   });
//   return arr;
// }
//

/* <button
        onClick={() => setFilteredCard(clear())}
        className="absolute top-0 left-[50%] bg-white"
      >
        CLEAR
      </button> */
