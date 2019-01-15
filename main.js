require('babel-polyfill');

const { createStore } = require('redux');
const {reducer} =require("babel!./reducers/reducer.js");
const store = createStore(reducer);

var ReactDOM = require('react-dom');
var React = require('react');

const {TimeLine} =require("babel!./components/timeline.js");

var DEBUG = false;

if (DEBUG) {

    console.log("DEBUG Mode")
}




const render = () => {

    console.log("RENDER", store.getState());

    let state = store.getState();

    ReactDOM.render(
    <TimeLine store={store} />,
        document.getElementById('mainview')

    );

};

console.log("Version","0.01");
store.subscribe(render);
//console.clear();
window.onload = render ;


