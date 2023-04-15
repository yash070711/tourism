import React from 'react'
import { useState, useRef, useEffect } from "react";
import autoAnimate from "@formkit/auto-animate";
import "./Dropdown.css";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
function Dropdown() {

  const [open, setOpen] = useState(false);
  const parentRef = useRef();

  useEffect(() => {
    if (parentRef.current) {
      autoAnimate(parentRef.current);
    }
  }, [parentRef]);

  const showMore = () => setOpen(!open);

  return (
    <div className="tag1">
     
      <div
        className="px-2 cursor-pointer py-1 border-2 border-gray-200 w-[400px] rounded-lg"
        ref={parentRef}
      >
        <div
          onClick={showMore}
          className="select-none font-bold w-full flex justify-between items-center"
        >
          <div className='s'>ContactUs<ArrowDropDownIcon className='s2'></ArrowDropDownIcon> </div>
          {/* <IconSelector size={20} /> */}

        </div>
        {open && (
          <p className="p-2 italic">
       <li>
        <ul>
        1.yash
        </ul>
        <ul>
        2.neha 
        </ul>
        </li>
          </p>
        )}
      </div>
    </div>
  );
}


export default Dropdown
