import React, { Component } from 'react';
import FrontLayout from './FrontLayout';

export default class FrontError extends Component {
  render() {
    return (
      <FrontLayout>
        <h2>Lỗi: không tìm thấy trang</h2>
      </FrontLayout>
    );
  }
}
