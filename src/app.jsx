
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router,Switch,Route,Redirect,Link} from 'react-router-dom';

import Layout from 'component/layout/index.jsx';
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
                    <Route  path="/login" component={Login}/>
                    <Route  path="/login" render={(props)=>(
                        <Layout>
                            <Switch>
                                <Route exact path="/" component={Home}/>
                                <Route  path="/product" component={Home}/>
                                <Route  path="/product-category" component={Home}/>
                            </Switch>
                        </Layout>
					)}/>

				</Switch>

			</Router>
		);
	}
}
ReactDOM.render(
	<App/>,
	document.getElementById('app')
);