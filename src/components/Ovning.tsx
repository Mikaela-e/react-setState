import { useState } from "react"

export function Ovning(){
const [counter, setCount]= useState(0);

function handleChange(){
    setCount(counter + 1)
}
 console.log(" Du klickade")
 return(<>
     <button onClick = {handleChange}> Klicka på knappen</button>
     <div>{counter}</div>
     </>
 )
};