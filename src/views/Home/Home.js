import { useEffect, useState } from "react"
import Post from "../../components/Post/Post"
import Service from "../../services/venue.service"

function Home(){
    
    const [venues,setVenues]=useState('')
    async function getVenues(){
        const res=await Service.list()
        setVenues([...res.data])
    }

    useEffect(()=>{
        getVenues()
    },[])
    return (
        <div className="d-flex flex-column align-items-center">
            {
                venues.length?venues.map((venue)=>(<Post venue={venue}/>))
                :<h2>No data</h2>
            }
        </div>
    )
}

export default Home