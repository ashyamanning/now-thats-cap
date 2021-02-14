import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'

const SoloTeamNameForm = () => {

    // local state variables
    const [teamName, setTeamName] = useState("")
    
    const handleSubmit = (e) => {
        e.preventDefault()
        // send to slice of state
        // push to game screen
    }
    return (
        <form onSubmit={handleSubmit}>

        </form>
    )
}

export default SoloTeamNameForm