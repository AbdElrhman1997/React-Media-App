import React from 'react'
import backImage from '../../Images/pexels-felix-mittermeier-956981.jpg'
import profileImage from '../../Images/pexels-sovit-chetri-3344325.jpg'

import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <img src={backImage} className='backImage'/>
            <img src={profileImage} className='profileImage'/>
            {/* <h1 className='headProfile'>AbdElrhman Mohamed</h1> */}
        </div>
    )
}

export default Header