/*console.log('hello,webpack');*/
/*
let a=123;
let test=(value)=>{
	return value*2;
};
test(a);*/

import React from 'react';
import ReactDOM from 'react-dom';

import	'font-awesome/css/font-awesome.min.css'

import './index.css';
import './index.scss';
/*import './1.jpg'*/

ReactDOM.render(
	<div>
		<i className="fa fa-address-book"></i>
		<h1>HELLO,world!</h1>,
	</div>,
	
	document.getElementById('app')
);