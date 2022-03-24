import {useState} from "react";

const Box = ({id, backgroundColor, width, height}) => {
   return (
      <div>
         <div id={id} style={{backgroundColor, width, height}}></div>
      </div>
   )
}

export default Box;