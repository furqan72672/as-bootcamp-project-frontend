import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import './HeaderAuth.css'

function HeaderAuth(){
    const navigate=useNavigate()
    return(
        <div className="header-bg-auth">
            <div className="header-left-auth">
                <img className="logo-header-auth" src='http://localhost:4000/uploads/images/logo.png' alt='Site Logo Here'/>
            </div>
            <div className="header-right-auth">
                <div>
                    <h1>Welcome To Events Bridge</h1>
                </div>
                <div className='btns'>
                    <Button variant='outline-primary text-white' onClick={()=>{navigate('/')}}>Home</Button>
                    <Button variant='outline-primary text-white' onClick={()=>{navigate('/auth/login')}}>Login</Button>
                    <Button variant='outline-primary text-white' onClick={()=>{navigate('/auth/signup')}}>SignUp</Button>
                </div>
            </div>
        </div>
    )
}

export default HeaderAuth