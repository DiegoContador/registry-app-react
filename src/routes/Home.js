import { render } from '@testing-library/react';
import React from 'react';
import {Link} from 'react-router-dom';

function Home(){

        return(
            <div>
                <h1>Home</h1>
                <Link to="/registry">Hax click para registrarse</Link>
                
            </div>

        );
}

export default Home;
