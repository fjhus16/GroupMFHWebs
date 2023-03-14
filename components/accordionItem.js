import React from "react";
import {AiOutlineMinus, AiOutlinePlus} from 'react-icons/ai';
import {Collapse} from 'react-collapse';

const accordionItem = ({open, toggle, title, desc}) => {
  return ( 
  <div className="bg-[#a7b1bd] pt-3 pb-3 px-4 mb-4">
    <div className="flex justify-between items-center cursor-pointer" onClick={toggle}>
      <p className="text-[22px] font-bold">{title}</p>
      <div className="text-[30px]">
       {open ? <AiOutlineMinus /> : <AiOutlinePlus />}
      </div>
    </div>

    <Collapse isOpened={open}>
      <div className="px-2 pt-2 pb-2 font-semibold">
        <p>{desc}</p>
      </div>
    </Collapse>

  </div>
  )
};

export default accordionItem;