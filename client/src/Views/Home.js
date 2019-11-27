import React from 'react';
import Header from '../Component/Header';
import Footer from '../Component/Footer';

const Home = ()=>{
    return(
        <div>
            <Header/>
                <main>
                    <div className="container">
                        <section className="jumbotron">
                            <div className="video"> 
                                <div className="video-frame">
                                    <img src="/media/ocean/overlay-hero.png" alt="image frame"/> 
                                </div>
                                <div className="video-media">
                                    <video  playsInline autoPlay={true} loop={true} muted={true} data-autoplay x5-video-player-type="h5" poster="/media/ocean/ocean.png">
                                        <source src="/media/ocean/ocean.mp4" type="video/mp4"></source>
                                        <source src="/media/ocean/ocean.ogv" type="video/ogv"></source>
                                        <source src="/media/ocean/ocean.webm" type="video/webm"></source>
                                        <p>Your user agent does not support the HTML5 Video</p>
                                    </video>
                                    <div className="video-overlay"></div>
                                </div>
                            </div>
                        </section>
                    </div>
                    <div className="home"> 
                        <div className="container">
                            <div className="entry-header">
                                <h1>Hello World</h1>
                                <p>About Life, Images and Code</p>
                                <a className='to-posts'>browse the gallery</a>
                    
                            </div>
                        </div>
                    </div>
                </main>
            <Footer/>
        </div>
    )
    
}

export default Home