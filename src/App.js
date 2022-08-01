import React, { useState } from "react";
import "./App.css";
import Card from "./Components/card";
import FilteredDiv from "./Components/FilteredDiv";
import dataArray from "./Data";
import { motion, AnimatePresence } from "framer-motion";

function App() {
  const [filteredCard, setFilteredCard] = useState(dataArray);
  const [filteredArrBtns, setFilteredArrBtns] = useState([]);

  function renderFilterDiv() {
    if (filteredArrBtns.length !== 0) {
      return true;
    }
    return false;
  }

  const cards = filteredCard.map((data) => {
    return (
      <motion.div initial={{ x: "-100%" }} animate={{ x: 0 }}>
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
      </motion.div>
    );
  });

  return (
    <div className="root-container relative max-h-full min-h-screen overflow-hidden bg-[#effafa] pb-8">
      <div className="App mb-8 h-40 bg-[#5ba4a4]">
        <div className="h-40 bg-[url('/public/images/bg-header-mobile.svg')] bg-cover bg-no-repeat lg:bg-[url('/public/images/bg-header-desktop.svg')] "></div>
      </div>
      <AnimatePresence>
        {renderFilterDiv() && (
          <motion.div
            exit={{
              y: -1000,
              opacity: 0,
              transition: { duration: 0.6 },
            }}
          >
            <FilteredDiv
              setFilteredCard={setFilteredCard}
              filteredArrBtns={filteredArrBtns}
              setFilteredArrBtns={setFilteredArrBtns}
            />
          </motion.div>
        )}
      </AnimatePresence>
      <motion.div
        animate={{
          y: 0,
        }}
        initial={{ y: -100 }}
        transition={{ delay: 0.4 }}
      >
        {cards}
      </motion.div>
    </div>
  );
}

export default App;
