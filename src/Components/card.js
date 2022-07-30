import React from "react";
import FilterBtn from "./FilterButton";
function Card(props) {
  const toolsBtn = props.tools.map((tool) => {
    return (
      <FilterBtn
        key={props.id}
        text={tool}
        setFilteredCard={props.setFilteredCard}
        filteredCard={props.filteredCard}
        filteredArrBtns={props.filteredArrBtns}
        setFilteredArrBtns={props.setFilteredArrBtns}
      />
    );
  });

  const langBtn = props.languages.map((language) => {
    return (
      <FilterBtn
        key={props.id}
        text={language}
        setFilteredCard={props.setFilteredCard}
        filteredCard={props.filteredCard}
        filteredArrBtns={props.filteredArrBtns}
        setFilteredArrBtns={props.setFilteredArrBtns}
      />
    );
  });

  function RenderNew(props) {
    if (props.isNew === true) {
      return (
        <button className="rounded-xl bg-[#5ba4a4] px-2 py-0 text-sm font-bold text-white">
          NEW!
        </button>
      );
    }
  }

  function RenderFeatured(props) {
    if (props.isFeatured === true) {
      return (
        <button className="rounded-xl bg-[#2c3a3a] px-2 py-0 text-sm font-bold text-white">
          FEATURED
        </button>
      );
    }
  }
  function isNewFeatured(props) {
    if (props.isNew && props.isFeatured) {
      return " border-l-[6px] border-[#5ba4a4]";
    }
  }
  return (
    <div
      className={`card lg:max-w[80%] relative mx-auto mt-12 flex max-w-[85%] flex-col rounded-lg bg-white px-4 pt-8 pb-4 font-serif shadow-xl lg:flex-row lg:items-center lg:py-8 lg:px-8 ${isNewFeatured(
        props
      )}`}
    >
      <div className="img-container absolute top-[-25px] w-12 lg:relative lg:top-auto  lg:w-auto">
        <img src={props.img} alt="" className="block h-full w-full" />
      </div>
      <div className="data-container mb-4 border-b-[1px] border-slate-400 lg:mb-0 lg:ml-6 lg:border-none lg:pb-0 [&>*]:mb-3 lg:[&>*]:mb-1">
        <div className="flex gap-2 lg:gap-1">
          <p className="mr-2 font-bold text-[#5ba4a4]">{props.company}</p>
          <RenderNew key={props.id} isNew={props.isNew} />
          <RenderFeatured key={props.id} isFeatured={props.isFeatured} />
        </div>
        <div className="cursor-pointer  font-bold text-[#2c3a3a] hover:text-[#5ba4a4] hover:duration-150 lg:text-[1.3rem]">
          {props.position}
        </div>
        <div className=" font-semibold text-slate-400">
          {props.postedAt} · {props.contract} · {props.location}
        </div>
      </div>
      <div className="button-container flex flex-wrap gap-4 lg:absolute lg:right-10">
        <FilterBtn
          text={props.role}
          setFilteredCard={props.setFilteredCard}
          filteredCard={props.filteredCard}
          filteredArrBtns={props.filteredArrBtns}
          setFilteredArrBtns={props.setFilteredArrBtns}
        />
        <FilterBtn
          text={props.level}
          setFilteredCard={props.setFilteredCard}
          filteredCard={props.filteredCard}
          filteredArrBtns={props.filteredArrBtns}
          setFilteredArrBtns={props.setFilteredArrBtns}
        />
        {langBtn}
        {toolsBtn}
      </div>
    </div>
  );
}

export default Card;
