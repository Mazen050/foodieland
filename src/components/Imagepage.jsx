import { useEffect, useState } from 'react'
import './Imagepage.css'
import Header from './Header'
import Collectionbutton from './Collectionbutton'
import { createApi } from 'unsplash-js';
import nodeFetch from 'node-fetch';



function Imagepage({mode}) {
  const imgid = new URLSearchParams(window.location.search).get('id')
  const [username,setUsername] = useState('')
  const [imgurl,setImgurl] = useState('')
  const [userpic,setUserpic] = useState('')
  const [collections,setCollections] = useState([])
  const [date,setDate] = useState([])
  const [Download,setDownload] = useState([])
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  console.log(imgid)
  const unsplash = createApi({
    accessKey: 'gRa7435PhZ4ES_LOV_JbsBNktvYmVFyqKNDmUioljxg',
    fetch: nodeFetch,
  });

  function handle_data(data){
    setImgurl(data.urls.regular)
    setUsername(data.user.name)
    setUserpic(data.user.profile_image.medium)
    setCollections(data.related_collections.results)
    setDownload([data.links.download_location,data.urls.full])
    
    const filter = new Date(data.created_at)
    setDate([months[filter.getMonth()],filter.getDate(),filter.getFullYear()])
    console.log(data)
    
  }

  useEffect(()=>{
    // console.log(fetch('https://api.unsplash.com/?client_id=gRa7435PhZ4ES_LOV_JbsBNktvYmVFyqKNDmUioljxg/search/photos'))
    
    unsplash.photos.get({ photoId: imgid }).then(data=>{
      
      handle_data(data.response)
    })
    
    
  },[imgid])

  function handle_download(){
    unsplash.photos.trackDownload({downloadLocation: Download[0],})
    //console.log(x)
    
    //const urlblob = URL.createObjectURL(res)
    //window.open(urlblob,"_blank")
  }

  return (
    <>
    <Header active='none'/>
    <main className='imagepage'>
    <div className='img-div'>
    <img className='img' src={imgurl}></img>

    </div>

    <div className='img-info'>
    <div className='flex-container-profile'>

    <div className='profile-pic-container'>
    <img className='profile-pic' src={userpic}></img>
    <strong>{username}</strong>
    </div>

    <p>Published on {date[0]} {date[1]}, {date[2]}</p>
    </div>

    <div className='info-buttons'>
        <button className='add-to-collection-button'>Add to Collection</button>
        <a className='a-nostyle' href="https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1721332155637-8b339526cf4c" download='photo.jpg' >
        <button className='download-button' onClick={()=>handle_download()}>Download</button></a>

    </div>

    <div className='info-collections'>
      <h3>Collections</h3>
      <div className='collection-buttons'>
      {/* <button className='collection-item'>
        <div className='collection-item-info'>
        <img src='https://images.unsplash.com/photo-1726406751078-e144dda92891?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'></img>
        <div className='collection-button-info'>
        <h4>Lake</h4>
        <p>12 photos</p>
        </div>
        </div>

        <div className='collection-item-remove'>
          <span className='collection-remove'>Remove</span>
        </div>
      </button> */}
      {collections.map((collection,index)=>(
        <Collectionbutton key={index} imglink={collection.cover_photo.urls.regular} title={collection.title} photonum={collection.total_photos}/>
      ))}
      </div>
    </div>

    </div>
    </main>
    </>
  )
}

export default Imagepage
