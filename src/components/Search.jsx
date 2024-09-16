import { useEffect, useState } from 'react'
import './Search.css'
import Header from './Header'
import gradian from './assets/gradiend-bg.svg'
import Input from './Input.jsx'
import Masonry from './Masonry.jsx'
import { createApi } from 'unsplash-js';
import nodeFetch from 'node-fetch';





function Search({mode}) {
    const search_query = new URLSearchParams(window.location.search).get('q')
    const [imglist, setimglist] = useState([])

    function handle_data(data){
      const imgurls = data.map(item=>[item.urls.regular,item.id])
      
      setimglist(imgurls)
    }
    
    useEffect(()=>{
      // console.log(fetch('https://api.unsplash.com/?client_id=gRa7435PhZ4ES_LOV_JbsBNktvYmVFyqKNDmUioljxg/search/photos'))
      const unsplash = createApi({
        accessKey: 'gRa7435PhZ4ES_LOV_JbsBNktvYmVFyqKNDmUioljxg',
        fetch: nodeFetch,
      });
      unsplash.search.getPhotos({query:search_query,perPage:20}).then(data=>{
        console.log(data)
        handle_data(data.response.results)
      })
      
    },[search_query])
  return (
    <>
      <Header mode='light'/>
      <div className='search-div'>
      <img className='gradien' src={gradian} draggable={false}></img>
      </div>
      <Input holder={search_query} className='search-field' mode={"light"}/>
      
      <Masonry imglist={imglist}></Masonry>
    </>
  )
}

export default Search
