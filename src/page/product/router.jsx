/*
* @Author: Rosen
* @Date:   2018-01-31 13:06:57
* @Last Modified by:   Rosen
* @Last Modified time: 2018-02-04 22:21:43
*/
import React            from 'react';
import { BrowserRouter as Router, Switch, Redirect, Route, Link } from 'react-router-dom'

// 页面
import ProductList      from 'page/product/index/index.jsx';
import ProductSave      from 'page/product/index/save.jsx';
import ProductDetail      from 'page/product/index/detail.jsx';

class ProductRouter extends React.Component{
    render(){
        return (
            <Switch>
                <Route path="/product/index" component={ProductList}/>
               <Route path="/product/save/:pid?" component={ProductSave}/>
               <Route path="/product/detail/:pid?" component={ProductDetail}/>
                <Redirect exact from="/product" to="/product/index"/>
                
            </Switch>
        )
    }
}
export default ProductRouter;