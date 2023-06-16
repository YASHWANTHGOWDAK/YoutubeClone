import '../Styles/vedios.css'
import { useState,useEffect } from "react";
const Vedios = () => {

    let [vedio, setVedio] = useState([])
    let [shorts,setShorts]=useState([])


    useEffect(()=>{
        let fetchdata = async ()=>{
            let response = await fetch('http://localhost:4000/videos')
            let data= await response.json()
            setVedio(data)  
            
            let response1 = await fetch('http://localhost:4000/shorts')
            let data1= await response1.json()
            setShorts(data1)  
        }
        fetchdata()
        })

    let removeVedio=(id,title)=>{
        fetch(`http://localhost:4000/videos/${id}`,{
           method:'DELETE' 
        })
        // let result =vedio.filter((x)=>x.id!=id)
        // setVedio(result)
        alert(`${title} vedio got removed`)
    }

   

    return (
        <div className="vedios">

            <h1>Featured Viedos</h1>

            <div className="vedioData">
                {vedio.map((data) => {
                    return (
                        <div className="vedio">
                            <img src={data.thumbnail} alt="" />
                            <div className="vedioDetails">
                                <h3>title: {data.title}</h3>
                                <p>channel :{data.channel}</p>
                                <p>Views : {data.views}</p>
                                <a onClick={()=>removeVedio(data.id,data.title)}>Remove</a>
                            </div>
                        </div>
                    )
                })}

            </div>

            <div className="short">
                <h1>Shorts</h1>
                
                <div className="shortData">
                {shorts.map((data)=>{
                    return(
                        <div className="shorts">
                            <img src={data.thumbnail} alt="" />
                            <div className="shortsDetail">
                                <h4>title :{data.title}</h4>
                                <p>views: {data.views}</p>
                            </div>
                        </div>
                    )
                })}
                </div>
                
            </div>
        </div>
    );
}

export default Vedios;