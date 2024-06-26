import React, { useState } from 'react'

import "./colorpicker.css"
const ColorPicker = () => {

  const [typeOfColor,setTypeOfColor]=useState("0")
  const [color,setColor]=useState("#000")

  const handleCreateRandomHexColor=()=>{
    const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", 'E', 'F'];

    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += hex[Math.floor(Math.random() * hex.length)];
    }
    
 setColor(color)
    

  }
  const handleCreateRandomRgbColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const rgbColor = `rgb(${r}, ${g}, ${b})`;
    setColor(rgbColor);
  };
  return (

 <div className="container" style={{background:color}}>
  <div className="button_color">
    <button onClick={()=>setTypeOfColor('hex')} className="hexColor  ">Create Hex Color</button>
    <button  onClick={()=>setTypeOfColor('rgb')} className="rgbColor">Create RGB color</button>
    <button onClick={typeOfColor==='hex'?handleCreateRandomHexColor:handleCreateRandomRgbColor} className='randomColor'>Generate Random Color</button>

  </div>

  <div className="dynamicColor">
    <h3 className='type' >{typeOfColor}</h3> 
     <h3 className='color'>{color}</h3>

  </div>
  </div>
  )
}

export default ColorPicker