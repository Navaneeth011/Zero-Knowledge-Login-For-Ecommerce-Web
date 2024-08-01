import React from 'react';
import { Link } from 'react-router-dom';

const landing = () => {
    return(
    <div style={{backgroundImage: `url('https://images.pexels.com/photos/1884584/pexels-photo-1884584.jpeg')`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      minHeight: '100vh'}}>
        <center style={{paddingTop:'20%'}}>
        <h1><b>NZ FASHION STORE</b></h1>
        <nav>
            <Link style={{color:'black',paddingRight:'400px'}} to="/login">Login</Link>
            <Link style={{color:'black',padding:'10px'}} to="/home">Home</Link>
            <Link style={{color:'black',paddingLeft:'400px'}} to="/signin">Signin</Link>
        </nav>
        </center>
    </div>
    );
  }

export default landing;
