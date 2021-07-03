import React from 'react';

import './App.css';
import Layout from './layout/Layout.jsx';
import Search from './cmps/Search.jsx';
import Random from './cmps/Random.jsx';

const App = () => {
  return (
    <Layout>
      <div className="main">
        <div className="search-container">
          <Search />
          </div>
          <Random />
      </div>
    </Layout>
  );
};

export default App;
