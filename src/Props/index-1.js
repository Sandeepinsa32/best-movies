import React from 'react';
import ReactDOM from 'react-dom';
import Greeting from './Greeting';
import Card from './Cards'
import './App.css';

function App() {


  return (

        <>
            <Greeting name="Eveyone"/>
            <Card img_src="https://images.pexels.com/photos/992815/pexels-photo-992815.jpeg?cs=srgb&dl=pexels-jessica-lewis-992815.jpg&fm=jpg" title= "red-pomegranate-seeds" link="https://www.pexels.com/photo/red-pomegranate-seeds-992815/"/>

            <Card img_src="https://images.pexels.com/photos/3513237/pexels-photo-3513237.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"  title= "photo-of-strawberries" link="https://www.pexels.com/photo/shallow-focus-photo-of-strawberries-3513237/"/>

            <Card img_src="https://images.pexels.com/photos/2768281/pexels-photo-2768281.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"  title= "round-purple-fruits" link="https://www.pexels.com/photo/round-purple-fruits-2768281/"/>


        </>

        );
}

export default App;
