import React, { useState } from 'react'

const OPTION = {
  size: 19,
  criteria: 5
}

function Control(props) {
  const [option, setOption] = useState(OPTION)

  const handleOnchangeCriteria = (e) => {
    const criteria = parseInt(e.target.value)
    setOption({criteria, size: option.size})
  }

  const handleOnchangeSize = (e) => {
    const size = parseInt(e.target.value)
    setOption({criteria: option.criteria, size})
  }

  const handleReset = () => {
    props.onReset(option)
  }

  const handleUndo = () => {
    props.onUndo()
  }

  return (
    <div className="w3-card-0">
      <header className="w3-container w3-light-grey">
        <h3>Turn {props.turn? "O" : "X"}</h3>
      </header>

      <div className="w3-row-padding w3-section">
        <div className="w3-half">
          <label>Size</label>
          <input 
            className="w3-input w3-border" 
            type="number" 
            placeholder="Two"
            value={option.size}
            onChange={handleOnchangeSize}
          />
        </div>
        <div className="w3-half">
          <label>Criteria</label>
          <input 
            className="w3-input w3-border" 
            type="number" 
            placeholder="Three"
            value={option.criteria}
            onChange={handleOnchangeCriteria}
          />
        </div>
      </div>

      <hr/>

      <button 
        className="w3-button w3-block w3-dark-grey"
        onClick={handleReset}
      >
        Reset
      </button>
      <br/>
      <button 
        className="w3-button w3-block w3-dark-grey"
        onClick={handleUndo}
      >
        Undo
      </button>
    </div>
  )
}

export default Control
export { OPTION }