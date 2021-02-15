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
        <div className="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
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
              <input className="form-control soloNameInput" type="text" placeholder="Player Name"/>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary">Submit</button>
            </div>
          </div>
        </div>
      </div>
    )
}

export default SoloTeamNameForm