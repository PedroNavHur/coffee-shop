import React from 'react';
import {HashRouter as Router, Route, Routes} from 'react-router-dom';

import Layout from '../layouts/Layout';

import Landing from '../pages/Landing';
import Journey from '../pages/Journey';
import Transition from '../pages/Transition';
import Brew from '../pages/Brew';
import Results from '../pages/Results';

const AppRoutes = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Transition />} />
          <Route path="/journey" element={<Journey />} />
          <Route path="/transition" element={<Transition />} />
          <Route path="/brew" element={<Brew />} />
          <Route path="/results" element={<Results />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default AppRoutes;