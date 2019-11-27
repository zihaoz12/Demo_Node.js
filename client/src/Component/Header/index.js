import React from 'react'

const Header = ()=>{
    return(    
        <header>
            <div className="container">
                <a className="homebutton"><span><i className="fas fa-home fa-2x"></i></span></a>
                <input type="checkbox" id="chk"></input>
                    <label htmlFor="chk" className="show-menu-btn">
                        <i className="fas fa-ellipsis-h"></i>
                    </label>
                    <nav className="header-nav">
                
                <a>
                <label htmlFor="chk" className="hide-menu-btn">
                    <i className="fas fa-times"></i>
                </label>
                </a>

                <a >about</a>
                
                <a ><span><i className="fas fa-user-alt fa-lg"></i></span></a>
            
                
                <a ><span><i className="fas fa-images fa-lg"></i></span></a>
                <a >LogOut</a>
                
                          
            </nav>
            </div>
        </header>
            
        
    )
}

export default Header;