import { useEffect, useState } from 'react'
import './Collectionbutton.css'




function Collectionbutton({imglink, title, photonum,add_remove}) {
  
  
  return (
    <>
    <button className='collection-item'>
        <div className='collection-item-info'>
        <img src={imglink}></img>
        <div className='collection-button-info'>
        <h4>{title}</h4>
        <p>{photonum} photos</p>
        </div>
        </div>

        <div className='collection-item-remove'>
          <span className='collection-remove'>Remove</span>
          {/* <span className='collection-add'>Add to Collection</span> */}
        </div>
      </button>
    </>
  )
}

export default Collectionbutton
