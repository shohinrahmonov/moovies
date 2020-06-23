import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'antd/dist/antd.css';
import { GlobalStyle } from './style/globalStyle';
import Dashboard from './pages/Dashboard';
import Header from './components/Header';
import MoviePreview from './pages/MoviePreview';
import ActorDetails from './pages/ActorDetails';
import Movies from './pages/Movies';
import ScrollToTop from './helpers/ScrollToTop';
import NotFound from './components/Error'

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Header />
        <Switch>
          <Route path="/movies" component={Movies}/>
          <Route path="/movie/:id" component={MoviePreview}/>
          <Route path="/actor/:id" component={ActorDetails}/>
          <Route exact path="/" component={Dashboard}/>
          <Route path="/" component={NotFound}/>
        </Switch>
        <GlobalStyle />
      </Router>
    </>
  );
}

export default App;
