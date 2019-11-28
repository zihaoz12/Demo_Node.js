import React from 'react';

const About =()=>(
    <div className="container">
        <div className="go-back">
            <a href="/gallery">Go Back</a>
        </div>

	    <div className="about-container">
            <h1>About</h1>

            <div>
                <iframe width="860" height="515" src="https://www.youtube.com/embed/h_ayZ-xcMd4" frameBorder={0} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title={'about'}></iframe>
            </div>

            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
	    </div>
    </div>
)

export default About;