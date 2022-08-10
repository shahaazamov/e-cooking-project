import React from 'react'
import Vector from '../../assets/Vector.svg'

function Subheading({title}) {
  return (
    <div style={{marginBottom:'1rem'}}>
        <p className='p__cormonant'>
            {title}
        </p>
        <img className='spoon__img' src={Vector} alt="" width={40} height={40}/>
    </div>
  )
}

export default Subheading