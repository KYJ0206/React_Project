import React,{useState} from "react";
import { css } from "styled-components";
import "./Counter.scss"

function Counter (){
    const [number , setNumber] = useState(0);
    const button = ".num button"
    const plusButton = () => {
        setNumber(number+1);
      }
    
      const minuseButton = () => {
        setNumber(number > 0 ? number - 1 : (number <= 0 && 0));
      }
    
    return (
        <div className="counter">
            <div className="inner">
                <div className="num">{number}</div>
                <button className="plusNum" onClick = {plusButton} style = {{backgroundColor:number >= 10 ? "red":"#fff"}}> +1 </button>
                <button onClick= {minuseButton } style = {{backgroundColor:number === 0 && "yellow"}}> -1 </button>
            </div>
        </div>
    )
}

export default Counter