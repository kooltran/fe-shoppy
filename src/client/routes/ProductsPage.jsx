import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { FrontLayout, Helmet } from '../common/';
import { getProducts } from '../reducers/products';

const Section = styled.section`

h3 {
	background-color: #f08c00;
	color: #fff;
	text-align: center;
	margin: 0;
	padding: 20px;
}

.listing {
	li {
		border: 1px solid #ffe066;
		border-radius: 5px;
		display: flex;
		flex-direction: column;
	}
	
	.cta {
		margin-top: auto;
		border-top: 1px solid #ffe066;
		padding: 10px;
		text-align: center;
	}
	
	.body {
		padding: 10px;
	}
	
	list-style: none;
	margin: 2em;
	display: grid;
	grid-gap: 20px;
	grid-auto-flow: dense;
	grid-template-columns: repeat(auto-fill,minmax(200px, 1fr));
	
	.wide {
		grid-column-end: span 2;
	}
}
`;

export class ProductsPage extends Component {

  static propTypes = {
    getProducts: PropTypes.func.isRequired,
    products: PropTypes.array
  };

  static fetchData(store) {
    return store.dispatch(getProducts());
  }

  componentDidMount() {
    this.props.getProducts();
  }

  render() {
    const products = this.props.products || [];
    const productElement = products.map(product=>{
      return (
          <li key={product.name}>
              <h3>{product.name}</h3>
              <div className="body">
                  <img src={product.images[Math.floor( Math.random() * 4)]} alt={product.slug}/>
                  <p>{product.description}</p>
              </div>
              <div className="cta"><a href="">Mua</a></div>
          </li>
      );
    });

    return (
      <FrontLayout>
        <Helmet>
          <title>Shoppy - Sản phẩm</title>
        </Helmet>
        <h2>Danh sách sản phẩm</h2>
          <Section>
              <ul className="listing">
                  {productElement}
              </ul>
          </Section>
      </FrontLayout>
    );
  }
}

export default connect(
  state => ({
    products: state.products.items
  }),
  {
    getProducts
  }
)(ProductsPage);
