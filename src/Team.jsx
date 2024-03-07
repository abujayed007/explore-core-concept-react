import { useState } from "react"

export default function Team(){
    const [player, setPlayer]= useState(11)
    const teamStyle={
        border:'2px solid purple',
        margin:'20px',
        padding:"15px",
        borderRadius:'5px'
    }

    const handleAdd=()=>{
       const addPlayer = player + 1
        setPlayer(addPlayer)
    }

    const handleRemove=()=>{
        const newPlayer = player - 1
         setPlayer(newPlayer)
     }

    return(
        <div style={teamStyle}>
            <h3>Players : {player}</h3>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleRemove}>Remove</button>
        </div>
    )
}