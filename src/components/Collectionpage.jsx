import { useEffect, useState } from 'react'
import './Collectionpage.css'
import { createApi } from 'unsplash-js';
import nodeFetch from 'node-fetch';
import Header from './Header'




function Collectionpage() {
    const [collection,setCollection] = useState([])

    
   useEffect(()=>{
    function handle_collections(data){
        setCollection(data.map((item)=>([item.title,item.total_photos,item.preview_photos.map((item)=>(item.urls.small)),item.id])))
        console.log(data.map((item)=>(item.id)))
       }
    const unsplash = createApi({
        accessKey: 'gRa7435PhZ4ES_LOV_JbsBNktvYmVFyqKNDmUioljxg',
        fetch: nodeFetch,
      });
    unsplash.collections.list({ page: 1, perPage: 30 }).then(data => handle_collections(data.response.results))

   },[])
  
  return (
    <>
    <Header active='collection'/>
    <div className='collections-title'>
      <div className='title-div'>
      <h1>Collections</h1>
      </div>
      <p>Explore the world through collections of beautiful photos free to use under the Unsplash License.</p>
    </div>

    <div className='collections'>

    
    {collection.map((item,index)=>(
        <div key={index} className='collection-imgs' onClick={()=>window.location.href=`/collections/collection?id=${item[3]}`}>
        <div className='cover'></div>
        <img className='coll-img-big' src={item[2][0]}></img>
        <div className='coll-img-div'>
        <img className='coll-img-top' src={item[2][1]}></img>
        </div>
        <div className='coll-img-div'>
        <img className='coll-img-bot' src={item[2][2]}></img>
        </div>
        <div className='coll-info'>
        <h4>{item[0]}</h4>
        <label>{item[1]} photos</label>
        </div>
    </div>))}

    </div>
    </>
  )
}

export default Collectionpage
