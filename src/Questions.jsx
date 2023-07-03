import { useState } from "react";
import  { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
function Question({element}){
    const [toggle, setToggle] = useState(false);
    const { title, info} = element;
    return(
        
        <>
        <div className="question">
            <header>
                <h4>{title}</h4>
                <button className="btn" onClick={() => {setToggle(!toggle)}}>
                    {toggle ? <AiOutlineMinus /> : <AiOutlinePlus/>}
                </button>
            </header>
            <p>{toggle ? info : null}</p>
        </div>
        </>
    )

}
export default Question;