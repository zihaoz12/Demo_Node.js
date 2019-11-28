import React from 'react'

const Footer = ()=>{
    return(
        <div>
             <footer>
                <div className="container">
                    <div className="row">
                        <p>©Copyright 2019 by
                            <span>
                                <a href="/#">
                                Hello world
                                </a>
                            </span>              
                        </p>
                    </div>
                    <div className="icon-row">
                        <span><i className="fab fa-twitter fa-2x"></i></span>
                        <span><i className="fab fa-facebook-f fa-2x"></i></span>
                        <span><i className="far fa-envelope fa-2x"></i></span>
                        <span><i className="fab fa-instagram fa-2x"></i></span>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer