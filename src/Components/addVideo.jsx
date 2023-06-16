import '../Styles/addvideos.css'
import { useRef } from 'react';
import {useNavigate} from 'react-router-dom'

const AddVideo = () => {
let navigate = useNavigate()

 let thumbnail =useRef(null)
 let title =useRef(null)
 let  channel=useRef(null)
 let views =useRef(null)


 let upload =(e)=>{
   e.preventDefault()

   let data ={
      thumbnail:thumbnail.current.value,
      title:title.current.value,
      channel:channel.current.value,
      views:views.current.value
   }
   fetch('http://localhost:4000/videos',{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify(data)
   })
   alert('video uploaded successfully')
   navigate('/')
 }


   return (
      
      <form action='' onSubmit={upload}>
         <div className="addvideo">
            <div className="image">
               <img width={350} height={450} src="https://preview.redd.it/8fcn5m3dxzy51.jpg?width=640&crop=smart&auto=webp&s=5e4acb6d963fb50ccabf93f28035bfa0e0c766b4" alt="" />
            </div>
            <div className="content">
               <div className="content1">
                  <h2>Welcome to Add Video</h2>
               </div>
               <div className="content2">
                  <label htmlFor="">Thumbnail</label><br />
                  <input ref={thumbnail} type="text" placeholder="enter thumbnail url" /><br /><br />
                  <label htmlFor="">Title</label><br />
                  <input ref={title} type="text" placeholder="enter title" /><br /><br />
                  <label htmlFor="">Channel</label><br />
                  <input ref={channel} type="text" placeholder="enter channel" /><br /><br />
                  <label htmlFor="">Views</label><br />
                  <input ref={views} type="text" placeholder="enter views" /><br /><br />
               </div>
               <button>Add Video</button>
            </div>
            </div>
      </form>
      
   );
}

export default AddVideo;