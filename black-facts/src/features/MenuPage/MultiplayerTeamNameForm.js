import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'

const MultiplayerTeamNameForm = () => {

    // local state variables for controlled inputs
    const [teamName1, setTeamName1] = useState("")
    const [teamName2, setTeamName2] = useState("")
    const [teamName3, setTeamName3] = useState("")
    const [teamName4, setTeamName4] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    // notes
    // form is going be storing this stuff inside of global state instead of backend
    // maybe create a current team slice and then pass that into the store?
    // test later
    // make the slice initial state an array
    // only render the non null names
    // max 4 teams?
    
    // put add team in a function, create a plus button

    return (
        <form onSubmit={handleSubmit}>

        </form>
    )
}

export default MultiplayerTeamNameForm