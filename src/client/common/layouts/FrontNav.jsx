import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import screen from '../../assets/scripts/screen';

const sectionStyle = {
    white: '#fff',
    dark: '#2f3036',
    'font-Helvetica':"'Helvetica Neue', Helvetica, Arial, sans-serif"
};

const Section = styled.section`
${screen['desktop-up']`
    margin-bottom: 50px;
`};

ul {
	list-style-type: none;
	margin: 0;
	padding: 0;
	position: absolute;
	
	li {
		a {
			&:hover {
				&+.hidden {
					display: block;
				}
			}
		}
	}
}

li {
	display: inline-block;
	float: left;
	margin-right: 1px;
	
	a {
		display: block;
		min-width: 140px;
		height: 50px;
		text-align: center;
		line-height: 50px;
		font-family: ${sectionStyle["font-Helvetica"]};
		color: ${sectionStyle.white};
		background: #2f3036;
		text-decoration: none;
	}
	
	&:hover {
		a {
			background: #19c589;
		}
		
		ul {
			a {
				background: #f3f3f3;
				color: ${sectionStyle.dark};
				height: 40px;
				line-height: 40px;
				
				&:hover {
					background: #19c589;
					color: ${sectionStyle.white};
				}
			}
		}
	}
	
	ul {
		display: none;
		
		li {
			display: block;
			float: none;
			
			a {
				width: auto;
				min-width: 100px;
				padding: 0 20px;
			}
		}
	}
}

.hidden {
	&:hover {
		display: block;
	}
}

.show-menu {
	font-family: ${sectionStyle["font-Helvetica"]};
	text-decoration: none;
	color: ${sectionStyle.white};
	background: #19c589;
	text-align: center;
	padding: 10px 0;
	display: none;
}

input[type=checkbox] {
	display: none;
	
	&:checked {
		&~#menu {
			display: block;
		}
	}
}

${screen['phone-only']`
    ul {
        position: static;
        display: none;
        
        li {
            width: 100%;
        }
    }
    
    li {
        margin-bottom: 1px;
        
        a {
            width: 100%;
        }
    }
    
    .show-menu {
        display: block;
    }
    `};
`;

export default class FrontNav extends Component {
  render() {
    return (
        <Section>
            <label htmlFor="show-menu" className="show-menu">Show Menu</label>
            <input type="checkbox" id="show-menu" role="button" />
            <ul id="menu">
                <li><Link to="/"> Home </Link></li>
                <li><Link to="/products"> Products </Link></li>
                {/*<li>*/}
                    {/*<a href="#">About ￬</a>*/}
                    {/*<ul className="hidden">*/}
                        {/*<li><a href="#">Who We Are</a></li>*/}
                        {/*<li><a href="#">What We Do</a></li>*/}
                    {/*</ul>*/}
                {/*</li>*/}
            </ul>
        </Section>
    );
  }
}
