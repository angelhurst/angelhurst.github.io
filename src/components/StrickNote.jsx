import { useState } from "react";

function StickNote(props) {

  function handleKeyDown(event){
    console.log(event.target.innerHTML.length)
      if(event.target.innerHTML.length >= 100 && event.code !== "Backspace"){
        event.preventDefault()
      }
    }

  function handleKeyUp(event){
    console.log(event.target.innerHTML.length)
      if(event.target.innerHTML.length === 0 ){
        event.target.innerHTML= "Escribe tus recordatorios"
      }
    }

    function handleFocus(event){
      if(event.target.innerHTML.length === 0 ){
        event.target.innerHTML= "Escribe tus recordatorios"
      }
    }

  function handleClick(event){
    console.log(event.target.innerHTML.length)
      if(event.target.innerHTML === "Escribe tus recordatorios"){
        event.target.innerHTML= ""
      }
    }
  
  const text = props.text !== "" ? props.text : "Escribe tus recordatorios";

  return (
    <div className="stick-note position-relative bg-blue text-dark font-monospace">
        <p className="bg-green p-2">
            Nota #{props.index + 1} 
        </p>
        <p contentEditable="true" className="stick-text text-white m-3 h-75 "
            onKeyDown={handleKeyDown} 
            onKeyUp={handleKeyUp}
            onClick={handleClick}
            onMouseOut={handleFocus}
            suppressContentEditableWarning={true}>
            {text}
        </p>
    </div> 
  );
}

export default StickNote;