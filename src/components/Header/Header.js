function Header(){
    return(
        <div className="header-outer">
            <nav>
                <ul>
                    <li>
                        <Link to={'/'}>Home</Link>
                    </li>
                    <li>
                        <Link to={'/about'}>About</Link>
                    </li>
                    <li>
                        <Link to={'/contact'}>Contact</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Header