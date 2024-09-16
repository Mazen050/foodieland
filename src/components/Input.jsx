import { useEffect, useState } from 'react'
import search from './assets/Search.svg'
import './Input.css'



function Input({mode,className,holder}) {
  var classn = 'search-'+mode
  const [inp, setInp] = useState('')
  useEffect(() => {
    if(holder){
      setInp(holder)
    }
  }, [holder])
  
  return (
    <div className={classn + ' ' + className}>
          <input value={inp} onChange={(e)=>{setInp(e.target.value)}} className='search-input' type='text' placeholder='Enter your keywords...' onKeyDown={(e)=>{if(e.key === 'Enter'){window.open("search?q="+inp,"_self")}}}></input>
          <label className='search-icon'></label>
    </div>
  )
}

export default Input
