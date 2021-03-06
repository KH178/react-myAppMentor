import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'; 
import SignupLoginPage from './pages/SignupLoginPage';
import AllQuestions from './pages/AllQuestions';
import axios from 'axios';
import './styles/body.css';

import Navbar from './components/Navbar';


//Pages
import Home from './pages/Home';
import Profile from './pages/Profile';
import NotFound from './pages/NotFound';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            user: {}
        }
    }
  async componentDidMount() {
    //  axios.get('').then(function (response) {
    //   this.setState = {user:response.data};
    //  }.bind(this));
    await axios.get(`https://randomuser.me/api/`)
       .then(res => {
          const user = res.data.results;
          this.setState({user:user[0]});
      })
  }

    render() {
      return (
          <>
        <Navbar />
            <Route render={({location}) => (
                <Switch location={location}>
                <Route exact path='/' render={(routeProps) => <Home {...routeProps}/>}/>
                  <Route exact path='/profile' render={(routeProps)=><Profile {...routeProps} user={this.state.user}/>}/>
                  <Route exact path='/allquestions' render={(routeProps)=><AllQuestions {...routeProps} user={this.state.user}/>}/>
                  <Route exact path='/signup-login' render={(routeProps)=><SignupLoginPage {...routeProps} user={this.state.user}/>}/>
                  {/* <Route exact path='/' render={(routeProps)=> <Page><PaletteList palette={this.state.palettes} {...routeProps} deletePalette={this.deletePalette}/></Page>}/>
                  <Route exact path='/palette/:id' render={(routeProps)=> <Page><Palette palette={generatePalette(this.findPalette(routeProps.match.params.id))}/></Page>}/>
                  <Route render={(routeProps)=><Page><PaletteList palette={this.state.palettes} {...routeProps} deletePalette={this.deletePalette}/></Page>}/> */}
                  <Route path='*' exact={true} component={NotFound} />
                </Switch>
          )}/>
          </>
        );
    } 
}

export default App;
