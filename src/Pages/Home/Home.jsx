import React from 'react';
import './Home.css'
import Sidebar from '../../Components/Sidebar/Sidebar';
import Feed from '../../Components/Feed/Feed';


function Home({sidebar}) {
    return ( 
        <div className='home'>
            <Sidebar sidebar={sidebar} />
            <div className={`container ${sidebar ? "" : "large-container" }`}>
                <Feed />
            </div>
        </div>
     );
}

export default Home;