
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router,Switch,Route,Redirect,Link} from 'react-router-dom';

/*import Layout from 'component/layout/index.jsx';*/
//页面
import Home from 'page/home/index.jsx';


class App extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		return(
			<Router>

                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Redirect from='*' to='/'/>
                    </Switch>

			</Router>
		);
	}
}
ReactDOM.render(
	<App/>,
	document.getElementById('app')
);