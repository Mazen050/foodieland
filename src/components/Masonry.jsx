import { useEffect, useState } from 'react'
import search from './assets/Search.svg'
import './Masonry.css'



function Masonry({imglist}) {
  //console.log(imglist)
  // imglist = ['https://images.unsplash.com/photo-1717397075045-8b4e0da1b41c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDZ8Ym84alFLVGFFMFl8fGVufDB8fHx8fA%3D%3D'
  //   ,"https://plus.unsplash.com/premium_photo-1671467857784-73e69ed7a02e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXxUMWp2Y21oRWU1RXx8ZW58MHx8fHx8"
  //   ,'https://images.unsplash.com/photo-1717397075045-8b4e0da1b41c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDZ8Ym84alFLVGFFMFl8fGVufDB8fHx8fA%3D%3D'
  //   ,'https://images.unsplash.com/photo-1717397075045-8b4e0da1b41c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDZ8Ym84alFLVGFFMFl8fGVufDB8fHx8fA%3D%3D'
  //   ,'https://images.unsplash.com/photo-1717397075045-8b4e0da1b41c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDZ8Ym84alFLVGFFMFl8fGVufDB8fHx8fA%3D%3D'

  // ]
  
  return (
    <div className='masonry-imgs'>
          {imglist.map((item,index)=>{
            return (<div className='item-div' key={index} onClick={()=>window.open("/image?id="+item[1],"_self")}>
                    <img className='item' src={item[0]}></img>
                    <div className='item-cover'></div>
                    </div>)
          })}
    </div>
  )
}

export default Masonry
