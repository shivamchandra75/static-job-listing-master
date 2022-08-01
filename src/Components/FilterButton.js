import React, { useRef } from "react";
import { motion } from "framer-motion";

function FilterBtn(props) {
  const filterBtn = useRef(null);

  //Returns an array
  const filteredArray = (e, props) => {
    const arr = props.filteredCard;
    const newArr = [];
    const checkValue = filterBtn.current.innerText;
    let checkValueFound = false;
    for (let obj of arr) {
      if (obj["role"] === checkValue) {
        newArr.push(obj);
      } else if (obj["level"] === checkValue) {
        newArr.push(obj);
      } else {
        for (let val of obj["languages"]) {
          if (val === checkValue) {
            checkValueFound = true;
            newArr.push(obj);
          }
        }
        if (!checkValueFound) {
          for (let val of obj["tools"]) {
            if (val === checkValue) {
              newArr.push(obj);
            }
          }
        }
      }
    }
    return newArr;
  };

  function addFilteredBtns() {
    let arr = props.filteredArrBtns;
    //Checking if the clicked button already exists in the filters
    for (let el of arr) {
      if (el === filterBtn.current.innerText) return arr; //immedeatly returnning if the elment is aready present
    }
    //pushing the element to arr if it is not present already inside the arr.
    arr.push(filterBtn.current.innerText);
    return arr;
  }

  return (
    <motion.button
      onClick={(e) => {
        props.setFilteredCard(filteredArray(e, props));
        props.setFilteredArrBtns(addFilteredBtns());
      }}
      className="rounded-md bg-[#effafa] p-[0.5em] font-bold text-[#5ba4a4] transition hover:cursor-pointer hover:bg-[#5ba4a4] hover:text-white hover:duration-150"
      ref={filterBtn}
      whileTap={{ scale: -0.2 }}
      transition={{ duration: 0.1 }}
    >
      {props.text}
    </motion.button>
  );
}

export default FilterBtn;
