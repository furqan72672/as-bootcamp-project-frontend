import { Link, useLocation } from "react-router-dom"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import './HeaderUser.css'

function HeaderUser(){
    const location=useLocation()
    const path=location.pathname
    console.log(path)
    return(
        <div className="header-bg">
            <div className="header-left">
                <div className="d-flex align-items-center">
                    <div className="logo-header">
                        <img className="logo-header" src='http://localhost:4000/uploads/images/logo.png' alt='Site Logo Here'/>
                    </div>
                    <h3>Events Bridge</h3>
                </div>
                <Link to='/' className={`nav-item ${path==='/'?'active':''}`}>Home</Link>
                <Link to='/contact' className={`nav-item ${path==='/contact'?'active':''}`}>Contact</Link>
                <Link to='/about' className={`nav-item ${path==='/about'?'active':''}`}>About</Link>
            </div>
            <div className="header-right">
                <Link to='/search'className={`nav-item ${path==='/search'?'active':''}`}><FontAwesomeIcon icon={faMagnifyingGlass} /></Link>
                {/* <Link to='/login' className={`nav-item ${path==='/login'?'active':''}`}>login</Link> */}
            </div>
        </div>
    )
}

export default HeaderUser