import React, { Component } from 'react';
import './App.css';


import {Fragment} from 'redux-little-router';
import typo from './typography';
const {rhythm} = typo;

class App extends Component {
  renderFragments() {
    const {routes} = this.props;
    return Object.keys(routes).map(key => {
        const PageComponent = routes[key].pageComponent;
        return (
          <Fragment forRoute={key} key={key}>
            <PageComponent/>
          </Fragment>
        )
    });
  }
  
  render() {
    return (
        <div style={{
          paddingLeft: '256px',
          minHeight: '400px'
        }}>
          <Fragment forRoute="/">
            <div style={{
              paddingLeft: rhythm(1),
              paddingRight: rhythm(1)
            }}>
              {this.renderFragments()}
            </div>
          </Fragment>
        </div>
    );
  }
}

export default App;
