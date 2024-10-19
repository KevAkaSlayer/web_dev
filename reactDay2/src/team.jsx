import { useState } from "react"

export default function Team() {

    const [team , setTeam] = useState(11);

    const handleAdd = () => {
        setTeam(team + 1);
    }


    const handleRemove = () => {
        setTeam(team - 1);
    }
    const teamStyle ={
        border : '2px solid red',
        padding : '10px',
        margin : '10px',
        borderRadius : '10px'

    }

    return (
        <div style={teamStyle}>
            <h3>Players: {team}</h3>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleRemove}>Remove</button>
        </div>
    )
}