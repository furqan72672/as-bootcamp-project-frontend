import { useEffect, useState } from "react"
import { Outlet } from "react-router-dom"
import HeaderGuest from "../components/HeaderGuest/HeaderGuest"
import HeaderUser from "../components/HeaderUser/HeaderUser"
// import HeaderAuth from "../components/HeaderAuth/HeaderAuth"

function SiteLayout(){

    const [type,setType]=useState('guest')
    function calculateType(){
        if(localStorage.getItem('token')!==null&&localStorage.getItem('token')!==undefined)setType('user')
    }

    useEffect(()=>{
        calculateType()
    },[])

    return(
        <>
            {type==='user'?<HeaderUser/>:<HeaderGuest/>}
            <Outlet/>
        </>
    )
}

export default SiteLayout