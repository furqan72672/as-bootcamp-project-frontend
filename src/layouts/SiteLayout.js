import { Outlet } from "react-router-dom"
import Header from "../components/Header/Header"

function SiteLayout(){
    return(
        <>
            <Header/>
            <Outlet/>
        </>
    )
}

export default SiteLayout