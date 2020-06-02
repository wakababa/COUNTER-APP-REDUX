import React from 'react';
import { connect } from "react-redux";

import './App.css';

const App=(props,{dispatch})=> {
  const {increment,count,decrement} = props;
  console.log(props);
  return (
    <div className="App container">

    <div className="jumbotron">
    
    <img  src="https://www.pngkit.com/png/full/222-2224803_react-redux-react-js-and-redux.png" alt="" className="image-fluid"/>
    <h3 className="mt-5">COUNTER APP REDUX</h3>
    </div>
    <button className="btn btn-primary m-1" onClick={increment} >Plus</button>
    <button className="btn btn-danger" onClick={decrement} >Minus</button>
    <h2>Count : {count}</h2>
      <blockquote>
    <h6 className="text-center">Created By : <a href="https://github.com/wakababa">Waka</a></h6>
    </blockquote>
    </div>
  );
}
const mapStateToProps = state => {
  const {count,products} = state;
 return {count,products};
};
const mapDispatchToProps = dispatch => {
  return {
    // dispatching plain actions
    increment: () => dispatch({ type: 'INCREMENT' }),
    decrement: () => dispatch({ type: 'DECREMENT' }),
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);