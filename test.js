require('babel-polyfill');

const { createStore } = require('redux');
const {reducer} =require("babel!./reducers/reducer.js");
const store = createStore(reducer);

var ReactDOM = require('react-dom');
var React = require('react');
const {Component} = require('react');

const {TestSquares} = require('babel!./tests/test_squares.js');


var DEBUG = false;

if (DEBUG) {

    console.log("DEBUG Mode")
}

const render = () => {

    console.log("RENDER", store.getState());

    let state = store.getState();

    ReactDOM.render( <TestSquares/>
        ,
        document.getElementById('mainview')

    );

};

console.log("TEST");
store.subscribe(render);
//console.clear();
window.onload = render ;


