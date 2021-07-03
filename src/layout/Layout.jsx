import React from 'react'

import Header from '../cmps/AppHeader.jsx';
import Footer from '../cmps/AppFooter.jsx';
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
