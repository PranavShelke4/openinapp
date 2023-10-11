import React from 'react';
import LeftSide from '../Component/Login/LeftSide';
import RightSide from '../Component/Login/RightSide';
import '../Style/Login.css';

function Login() {
  return (
    <div className='Login-Page'>
        <LeftSide />
        <RightSide />
    </div>
  )
}

export default Login