import { useEffect, useState } from 'react'
import './Header.css'
import logo_light from './assets/Logo.svg'
import logo_dark from './assets/Logo-dark.svg'



function Header({mode,active='home'}) {
  const [modee, setModee] = useState('header')
  const [logo , setLogo] = useState()
  const [home , setHome] = useState("button")
  const [collection , setCollection] = useState("button")
  useEffect(() => {
    if(active == 'home'){
      setHome('button-active')
      setCollection('button')
    }else if(active == 'collection'){
      setHome('button')
      setCollection('button-active')
    }
    if(mode == 'dark'){
      setModee('header-dark')
      setLogo(logo_dark)
    }else{
      setModee('header')
      setLogo(logo_light)
    }
  }, [mode])
  
  return (
    <div className={modee}>
      <img src={logo}></img>
      <div>
        <button className={home} onClick={()=>window.open("/","_self")}>Home</button>
        <button className={collection} onClick={()=>window.open("/collections","_self")}>Collections</button>
      </div>
    </div>
  )
}

export default Header
