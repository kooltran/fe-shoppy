import React, { Component } from 'react';
import PropTypes from 'prop-types';

import FrontHeader from './FrontHeader';
import FrontNav from './FrontNav';
import FrontSidebar from "./FrontSidebar";
import FrontFooter from './FrontFooter';


export default class FrontLayout extends Component {
  static propTypes = {
    children: PropTypes.any
  };

  render() {
    return (
      <React.Fragment>
        <FrontHeader />
        <FrontNav />
        <main>
          {this.props.children}
        </main>
        <FrontSidebar />
        <FrontFooter />
      </React.Fragment>
    );
  }
}
