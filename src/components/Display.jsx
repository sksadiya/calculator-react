import React from 'react'

export default function Display(props) {
  return (
    <div className="card-header bg-transparent p-4">
      <input type="text" className="form-control text-end" placeholder="0" value={props.input} readOnly />
      <div className="text-end text-light fs-4">{props.result}</div>
    </div>
  )
}
