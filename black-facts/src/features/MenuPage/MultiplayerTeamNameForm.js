import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {addName} from './playerNameSlices/multiplayerTeamNameSlice'
import { setLoading } from '../LoadingSlice/loadingSlice'
import $ from "jquery";
import "../../features/MenuPage/css/formModal.css"

const MultiplayerTeamNameForm = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    // local state variables for controlled inputs
    const [teamName1, setTeamName1] = useState("")
    const [teamName2, setTeamName2] = useState("")
    const [teamName3, setTeamName3] = useState("")
    const [teamName4, setTeamName4] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(setLoading())
        dispatch(setLoading())
        history.push("/categories")
        // send to slice of state
        // push to game screen
        $("#exampleModalCenter").modal('toggle')
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
        <div className="modal fade" id="exampleModalCenter2" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">Multiplayer Team Game</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit}>
              <input className="form-control soloNameInput" type="text" placeholder="Player Name 1" value={teamName1} onChange={(e) => setTeamName1(e.target.value)} required/>
            <div className="modal-footer">
              <button type="submit" className="btn btn-primary formSubmitButton">Submit</button>
            </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
}

export default MultiplayerTeamNameForm