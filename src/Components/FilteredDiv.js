import React from "react";
import dataArray from "../Data";

function FilteredDiv(props) {
  function FilterCrossBtn(props) {
    return (
      <div className="flex">
        <button className="rounded-tl-md rounded-bl-md bg-[#effafa] p-[0.5em] font-bold text-[#5ba4a4] hover:cursor-pointer">
          {props.text}
        </button>
        <div
          onClick={(e) => {
            props.setFilteredArrBtns(removeFilterBtn(e, props));
            props.setFilteredCard(filteredArrayNew(props));
          }}
          className="rounded-tr-md rounded-br-md bg-[#5ba4a4] p-3 font-bold text-white hover:cursor-pointer hover:bg-[#2c3a3a]"
        >
          X
        </div>
      </div>
    );
  }

  function removeFilterBtn(e, props) {
    const arr = props.filteredArrBtns;
    const index = arr.indexOf(e.target.parentElement.children[0].innerText);
    if (index > -1) {
      arr.splice(index, 1);
    }
    return arr;
  }

  function filteredArrayNew(props) {
    if (props.filteredArrBtns.length === 0) return dataArray;
    let btnArr = props.filteredArrBtns;
    let arr = dataArray;
    let newArr = [];
    let checkValueFound = false;
    for (let element of btnArr) {
      let checkValue = element;
      newArr = [];
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
      arr = newArr;
    }

    return newArr;
  }

  function resetFilter(e, props) {
    props.setFilteredCard(dataArray);
    props.setFilteredArrBtns([]);
  }

  const allCrossBtns = props.filteredArrBtns.map((element, index) => {
    return (
      <FilterCrossBtn
        text={element}
        key={index}
        setFilteredArrBtns={props.setFilteredArrBtns}
        filteredArrBtns={props.filteredArrBtns}
        setFilteredCard={props.setFilteredCard}
      />
    );
  });
  return (
    <div className="filter-div relative top-[-70px] mx-auto flex max-w-[85%] items-center justify-between rounded-xl bg-white p-4 px-8 lg:max-w-[85%]">
      <div className="flex flex-wrap gap-4 ">{allCrossBtns}</div>
      <div>
        <button
          onClick={(e) => resetFilter(e, props)}
          className=" transition-all hover:underline hover:duration-300"
        >
          Clear
        </button>
      </div>
    </div>
  );
}

export default FilteredDiv;

//Recursive Function
// function filteredArrayNew(arr, arr2, props) {
//   if (arr.length === 0) return arr;
//   const newArr = [];

//   const checkValue = arr[0];
//   for (let obj of arr2) {
//     for (let key in obj) {
//       if (typeof obj[key] !== typeof arr) {
//         if (obj[key] === checkValue) {
//           newArr.push(obj);
//         }
//       } else {
//         for (let val of obj[key]) {
//           if (val === checkValue) {
//             newArr.push(obj);
//           }
//         }
//       }
//     }
//   }
//   arr.splice(0, 1);
//   return newArr.concat(filteredArrayNew(arr, newArr, props));
// }

// for (let obj of arr) {
//   for (let key in obj) {
//     if (typeof obj[key] !== typeof arr) {
//       if (obj[key] === checkValue) {
//         newArr.push(obj);
//       }
//     } else {
//       for (let val of obj[key]) {
//         if (val === checkValue) {
//           newArr.push(obj);
//         }
//       }
//     }
//   }
// }
