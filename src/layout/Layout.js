import React from 'react'

import Header from '../cmps/header/Header';
import Footer from '../cmps/footer/Footer';
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
