import React from 'react'

const Header = ()=>{
    return(    
        <header>
            <div className="container">
                <a className="homebutton" href='/#'><span><i className="fas fa-home fa-2x"></i></span></a>
                <input type="checkbox" id="chk"></input>
                    <label htmlFor="chk" className="show-menu-btn">
                        <i className="fas fa-ellipsis-h"></i>
                    </label>
                    <nav className="header-nav">
                
                <a href='/'>
                <label htmlFor="chk" className="hide-menu-btn">
                    <i className="fas fa-times"></i>
                </label>
                </a>

                <a href='/about'>about</a>
                
                <a href='/login'><span><i className="fas fa-user-alt fa-lg"></i></span></a>
            
                
                <a href='/gallery'><span><i className="fas fa-images fa-lg"></i></span></a>
                <a href='/' >LogOut</a>
                
                          
            </nav>
            </div>
        </header>
            
        
    )
}

export default Header;