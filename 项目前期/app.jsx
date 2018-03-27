/*console.log('hello,webpack');*/
/*
let a=123;
let test=(value)=>{
	return value*2;
};
test(a);*/

import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router,Switch,Route,Link} from 'react-router-dom';


/*import	'font-awesome/css/font-awesome.min.css'

import './index.jsx.jsx.css';
import './index.jsx.jsx.scss';
/*import './1.jpg'*/
class A extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		return (<div>
		 Compinent A
			<Switch>
				<Route exact path={`${this.props.match.path}`} render={(route)=>{
					return <div>当前组件是不带参数的A</div>
				}}/>
                <Route  path={`${this.props.match.path}/:id`} render={(route)=>{
                    return <div>当前组件是带参数的A:参数是{route.match.params.id}</div>
                }}/>
			</Switch>

		  </div>)
	}
}
class B extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		return <div> Compinent B</div>
	}
}
class Wrapper extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		return(
			<div>
				<Link to="/a">组件A</Link>
				<br/>
				<Link to="/a/123">带参数的组件A</Link>
                <br/>
                <Link to="/b">组件B</Link>

				{this.props.children}
			</div>
		)
	}
}
ReactDOM.render(
	/*<div>
		<i className="fa fa-address-book"></i>
		<h1>HELLO,world!</h1>,
	</div>,*/
	<Router>
        <Wrapper>
            <Route path="/a" component={A}/>
            <Route path="/b" component={B}/>
        </Wrapper>
	</Router>
	,
	
	document.getElementById('app')
);