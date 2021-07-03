import React from 'react';

import './App.css';
import Layout from './layout/Layout';
import Search from './cmps/search/Search';
import Random from './cmps/random/Random.jsx';

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
