import React from 'react'

import Header from '../cmps/header/Header.jsx';
import Footer from '../cmps/footer/Footer.jsx';
import './style.css';


const Layout = (props) => {
    return (
        <div className="container">
            <Header />
            {props.children}
            <Footer />
        </div>
    )
}

export default Layout
