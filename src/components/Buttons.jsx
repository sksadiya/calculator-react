import React from 'react'

export default function Buttons(props) {
  const buttons = ["7", "8", "9", "/", "4", "5", "6", "*", "1", "2", "3", "-", ".", "0", "=", "+","C"];
  return (
    <div className="card-body">
      <div className="row g-2">
        {buttons.map((char) => (
          <div className="col-3" key={char}>
            <button className="btn btn-light w-100" onClick={() => props.handleClick(char)}>
              {char}
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
