import { useEffect, useState } from 'react'
import './Collectionphotopage.css'
import { createApi } from 'unsplash-js';
import nodeFetch from 'node-fetch';
import Header from './Header'
import Masonry from './Masonry';





function Collectionphotopage() {
  const collectionid = new URLSearchParams(window.location.search).get('id')

  const [collectionphotos,setCollectionphotos] = useState([])
  const [name , setname] = useState([])

  function handle_collection(data){
    const links = data.map((item)=>([item.urls.regular,item.id]))
    //console.log(data)
    setCollectionphotos(links)
    }
  useEffect(()=>{
   
   const unsplash = createApi({
       accessKey: 'gRa7435PhZ4ES_LOV_JbsBNktvYmVFyqKNDmUioljxg',
       fetch: nodeFetch,
     });
     unsplash.collections.get({ collectionId: collectionid }).then(data =>setname([data.response.title,data.response.total_photos]))
     unsplash.collections.getPhotos({ collectionId: collectionid ,perPage: 20,}).then(data => {handle_collection(data.response.results)})

  },[])
 
 return (
   <>
   <Header active='collection'/>
   <div className='collections-title-collection'>
     <div className='title-div-collection'>
     <h1>{name[0]}</h1>
     </div>
     <p>{name[1]} photos</p>
   </div>

   <div>
    <Masonry imglist={collectionphotos}/>
   </div>
   </>
  )
}

export default Collectionphotopage
