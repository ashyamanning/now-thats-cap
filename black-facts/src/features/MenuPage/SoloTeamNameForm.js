import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {addName} from './playerNameSlices/soloTeamNameSlice'
import { setLoading } from '../LoadingSlice/loadingSlice'
import $ from "jquery";
import "../../features/MenuPage/css/formModal.css"

const SoloTeamNameForm = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    // local state variables
    const [teamName, setTeamName] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addName(teamName))
        dispatch(setLoading())
        dispatch(setLoading())
        history.push("/categories")
        // send to slice of state
        // push to game screen
        $("#exampleModalCenter").modal('toggle')
    }
    return (
        <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">Solo Team Game</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit}>
              <input className="form-control soloNameInput" type="text" placeholder="Player Name" value={teamName} onChange={(e) => setTeamName(e.target.value)} required/>
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

export default SoloTeamNameForm