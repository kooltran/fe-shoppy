import React, { Component } from 'react';
import {FrontLayout, Helmet} from '../common/';

export default class HomePage extends Component {
  render() {
    return (
      <FrontLayout>
        <Helmet>
          <title>Shoppy - Trang chủ</title>
        </Helmet>
        <h2>Trang chủ</h2>
      </FrontLayout>
    );
  }
}
