import * as React from "react";
import { Reorder, animate, MotionValue, useMotionValue, useDragControls } from "framer-motion";
import { useState, useEffect } from "react";





  


  function Liste() {
    const [items, setItems] = useState(["Qualité de vie", "Infrastructure et services", "Emplois et opportunités économiques", "Diversité et tolérance", "Durabilité environnementale",  ])
   
    return (
      <Reorder.Group as="ol" axis="y" values={items} onReorder={setItems}>
        {items.map((item) => (
          <Reorder.Item className="my-10 mx-10 py-10 bg-useabl text-white" key={item} value={item} >
            {item}
          </Reorder.Item>
        ))}
      </Reorder.Group>
    )
  }

  export default function Order() {

    return(
        <div className="flex justify-center">
        <div className="rounded-xl bg-gradient-to-b from-red-300 to-useayl w-[50%] mt-20"><Liste className=""/></div>
        </div>
    )
  }

