import React from 'react'
import "./Component.css"

const ListItems = ({value}) => {

  const description = ['Your Info', 'Select Plan' , 'Add-Ons', 'Summary'];

  if (value === 4){
    value = 3;
  }

  return (
    <>
    {description.map((item, index)=> ( 
      <div key={index} className='left'>
      <div className={`number ${index == value ? "selected" : ""}`}>{index + 1}</div>
      <div className='info'>
        <p className="info-text-p">Step {index + 1}</p>
        <p className="info-text">{item}</p>
      </div>
    </div>
  ))}
    </>
  )
}

export default ListItems;