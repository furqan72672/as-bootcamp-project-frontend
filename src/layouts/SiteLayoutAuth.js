import { Outlet } from "react-router-dom"
import HeaderAuth from "../components/HeaderAuth/HeaderAuth"

function SiteLayoutAuth(){
    return(
        <>
            <HeaderAuth/>
            <Outlet/>
        </>
    )
}

export default SiteLayoutAuth