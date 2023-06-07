import '../Styles/vedios.css'
import { useState } from "react";
const Vedios = () => {

    let [vedio, setVedio] = useState([
        {
            thumbnail:"https://i.ytimg.com/vi/SMKPKGW083c/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLASjzfMMFKtjQrFieWSC3xdhQCQow",
            title:"Norway AMAZING - Horizon View bath with Beautiful nature ",
            channel:"Relaxation Film",
            views:"18M views",
            id:"1"
        },
        {
            thumbnail: "https://i.ytimg.com/vi/5oH9Nr3bKfw/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLADljubpShDmiw4b5a5pkjD83fDdA",
            title: "Tom & Jerry",
            channel: "WB Kids",
            views: "203M views",
            id:"2"
        },
        
        {
            thumbnail:"https://i.ytimg.com/vi/gIQ3JmA670U/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDK_AFPpN36k_lxC-hSqOQq5TyX5Q",
            title:"The memories that light up our hearts | RCB Bold Diaries by Royal Challengers Bangalore ",
            channel:"Royal Challengers Bangalore",
            views:"102K views",
            id:"3"
        },
        {
            thumbnail: "https://i.ytimg.com/vi/WhMYMAU0YPQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCwIfmdjsJkwCI1_kApGGt4q8-uVA",
            title: "Lakshya",
            channel: "Mango Indian Films",
            views: "9.1M views",
            id:"4"
        },

        {
            thumbnail: "https://i.ytimg.com/vi/0n7AWxYCj9I/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDUChiH24-GK6MgafIoIeMz8AMZ1A",
            title: "Na Roja Nuvve",
            channel: "Saregama Telugu",
            views: "27M views",
            id:"5"

        },
        {
            thumbnail: "https://i.ytimg.com/vi/V-n_w4t9eEU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBbH14XrJ5HjRscKLz5gQVuNGUUIA",
            title: "Guntur Kaaram ",
            channel: "Haarika & Hassine Creations",
            views: "28M views",
            id:"6"
        },
        {
            thumbnail: "https://i.ytimg.com/vi/PoBHh4kvSXY/hq720.jpg?sqp=-oaymwE2CNAFEJQDSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARh_IBMoNzAP&rs=AOn4CLA94kHmC4oPPVBEw3e1N3ZaU2JE_g",
            title: "Best of Sanam ",
            channel: "Dhun Galaxy",
            views: "184K views",
            id:"7"
        },
        {
            thumbnail: "https://i.ytimg.com/vi/GjfxDRRLXAQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA12-xW0can9eMhlUd9O8u8XgpZWg",
            title: "Rabba Janda",
            channel: "Zee Music Company",
            views: "29M views",
            id:"8"
        },
        {
            thumbnail: "https://i.ytimg.com/vi/EdftT8GMU1U/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAxTPCveWz700Bst6xXFBrtybXiOg",
            title: "O Bedardeya",
            channel: "T-Series",
            views: "79M views",
            id:"9"
        },
        {
            thumbnail: "https://i.ytimg.com/vi/eBMxIV-0rvE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCEBCwxyFXMKF_ZfP5TlrVH6fxlXA",
            title: "Non Stop Love Mashup 2023",
            channel: "Vinyl Lofi",
            views: "5.5M views",
            id:"10"
        },
        {
            thumbnail: "https://i.ytimg.com/vi/Hi_K6LbmeME/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDllCWC_MNLgx1eekUQW5ccPu53vQ",
            title: "RED CHICKEN RECIPE HYDERABAD WEDDING STYLE",
            channel: "PICHEKKISTA BOBBY FOOD",
            views: "170K views",
            id:"11"
        },
        {
            thumbnail: "https://i.ytimg.com/vi/PLtgIILX7E8/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDk5H6BdqYAnWBM8LFQFAPBhIoUcA",
            title: "AVATAR Full Movie 2023: Fallen Kingdom",
            channel: "Superhero FXL Games",
            views: "11M views",
            id:"12"
        },
        {
            thumbnail: "https://i.ytimg.com/vi/ZT2ilX9MC1w/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCx3eN_0VzvN6ORnj8GRJvyllmVfQ",
            title: "Last time in NZ: Super overs galore! | IND Vs NZ ",
            channel: "Prime Video India",
            views: "16M views",
            id:"13"
        },
        {
            thumbnail: "https://i.ytimg.com/vi/TNuFo9GBXAc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBz4ZB_FbiwBqefg7zES6-UgUx2rQ",
            title: "Zara Hatke Zara Bachke Trailer ",
            channel: "Maddock Films",
            views: "7.9M views",
            id:"14"
        },
        {
            thumbnail:"https://i.ytimg.com/vi/GTRQsa3jpXU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCx_30UOYjo3tf0Rt-B3y5W87VzeQ",
            title:"Australia The Ultimate Travel Guide | Best Places to Visit | Top Attractions",
            channel:"Misk Travel Guide",
            views:"1.7M views",
            id:"15"
        },
        {
            thumbnail:"https://i.ytimg.com/vi/nyA3teAJkK0/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDuMto06EWiRlTVqX_ANFJuRC54pg",
            title:"We explored KUMBHE WATERFALL like NO ONE BEFORE | Kumbhe waterfall Information |",
            channel:"Aniruddha Patil",
            views:"3M views",
            id:"16"
        }
       


    ])

    let [shorts,setShorts]=useState([
        {thumbnail:"https://i.ytimg.com/vi/AvJimW8LiNk/oar2.jpg?sqp=-oaymwEaCJUDENAFSFXyq4qpAwwIARUAAIhCcAHAAQY=&rs=AOn4CLC-TE-1uHrxQ6mmDPsku62uvk4bhw",
          title:"New Video Nora Fateehi Song Dance Performance #trending #youtubeshorts #norafatehi #10m #newsong"  ,
          views:"17M views"   
        },
        {thumbnail:"https://i.ytimg.com/vi/D1r1C6QPcj4/oar2.jpg?sqp=-oaymwEaCJUDENAFSFXyq4qpAwwIARUAAIhCcAHAAQY=&rs=AOn4CLAQV2wRUva4Tso-imR499JdjYDHKw",
          title:"sarah Taylor cute status#shorts#subscribe"  ,
          views:"25M views"   
        },
        {thumbnail:"https://i.ytimg.com/vi/KM4WySq8zZI/hq720.jpg?sqp=-oaymwEdCJUDENAFSFXyq4qpAw8IARUAAIhCcAHAAQbQAQE=&rs=AOn4CLBsMCmf8fCIMdHLPq8i2fHjMOM1hg",
          title:"Was bollywood copied from me? #shorts#adipurush"  ,
          views:"3.5M views"   
        },
        {thumbnail:"https://i.ytimg.com/vi/6mvHaS459J0/hq720.jpg?sqp=-oaymwEdCJUDENAFSFXyq4qpAw8IARUAAIhCcAHAAQbQAQE=&rs=AOn4CLCQyfkcMgOYCFzANTX-OSICMyF5Vw",
          title:"Le Maja With Almost Padipoyindhe Pilla | Das Ki Dhamki | Vishwak Sen | Nivetha | Leon | #shorts"  ,
          views:"4.5M views"   
        },
        {thumbnail:"https://i.ytimg.com/vi/0lLat-gTEtg/oar2.jpg?sqp=-oaymwEaCNoCENAFSFXyq4qpAwwIARUAAIhCcAHAAQY=&rs=AOn4CLDtQ1ewl3NXAmS1TVHtoRQLDa1U2w",
          title:"MCK movie song whatsapp status #shorts #viral #Macherlaniyojakavargam#movie #nithin#krithishetty#mck"  ,
          views:"4.1M views"   
        },
        {thumbnail:"https://i.ytimg.com/vi/QHKPLxc0F6o/hq720_2.jpg?sqp=-oaymwEdCJUDENAFSFXyq4qpAw8IARUAAIhCcAHAAQbQAQE=&rs=AOn4CLClIUVg7VtTuJpC9-A885yn9XpvKg",
          title:"Who Do This Trick Shot Better? Me or 27y Elite Player #shorts"  ,
          views:"1.9M views"   
        }

    ])

    let removeVedio=(id,title)=>{
        let result =vedio.filter((x)=>x.id!=id)
        setVedio(result)
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
                {shorts.map((datas)=>{
                    return(
                        <div className="shorts">
                            <img src={datas.thumbnail} alt="" />
                            <div className="shortsDetail">
                                <h4>title :{datas.title}</h4>
                                <p>views: {datas.views}</p>
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