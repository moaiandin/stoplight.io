import React from 'react';
import Routes from 'react-static-routes';
import { Router } from 'react-static';

import Analytics from 'src/components/Analytics';
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';

import 'src/styles/app.css';
import 'src/styles/app.scss';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Analytics>
          <Header />

          <div className="relative">
            <Routes />
          </div>

          <Footer />
        </Analytics>
      </Router>
    );
  }
}

export default App;
