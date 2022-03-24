import { useState } from "react";
import { v4 as uuid } from "uuid";
import NewBoxForm from "./NewBoxForm";
import Box from "./Box";

const BoxList = () => {
   
   const [boxes, setBoxes] = useState([]);
   const addItem = (backgroundColor, width, height) => {
      setBoxes(boxes => [...boxes, {id: uuid(), backgroundColor, width, height}]);
   }
   return (
      <div>
         <NewBoxForm addItem={addItem}/>
         <div>
            {boxes.map(({id, backgroundColor, width, height}) => <Box id={id} backgroundColor={backgroundColor} width={width} height={height} key={uuid()} />)}
         </div>
      </div>
   )
}

export default BoxList;