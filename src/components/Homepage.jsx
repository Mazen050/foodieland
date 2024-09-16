import { useEffect, useState } from 'react'
import './Homepage.css'
import Header from './Header'
import search from './assets/Search.svg'



function Homepage({mode}) {
  const [modee, setModee] = useState('pos')
  const [bodymodee, setbodyModee] = useState('body')
  const [headermode, setHeadermode] = useState('light')
  const [inp , setInp] = useState('')
  
  useEffect(() => {
    if(mode == 'dark'){
      setModee('pos-dark')
      setbodyModee('body-dark')
      setHeadermode('dark')
      
    }else{
      setModee('pos')
      setbodyModee('body')
      setHeadermode('light')
    }
  }, [mode])
  return (
    <>
      <Header mode={headermode}/>
      <div className={bodymodee}>
        <div className={modee}>
          <h1>Search</h1>
          <p>Search high-resolution images from Unsplash</p>
          <div className='search'>
          <input value={inp} onChange={(e)=>{setInp(e.target.value)}} className='search-input' type='text' placeholder='Enter your keywords...' onKeyDown={(e)=>{if(e.key === 'Enter'){window.open("search?q="+inp,"_self")}}}></input>
          <label className='search-icon'></label>
          </div>
        </div>
      </div>
      
    </>
  )
}

export default Homepage
