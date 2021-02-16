//import logo from "./logo.svg";
import Navigation from "./components/navigation/navigation";
import Content from "./components/content/content";
//import {useRef} from "react";
import "./App.css";
import React, { Component } from "react";

class App extends Component {

  constructor(props) {
    super(props);

    this.handler = this.handler.bind(this)
    this.state = {selected: "Home"}
  }

  handler(name) {
    this.setState({selected: name})
  }

  render () {
    return <div className="App">
      <Navigation handler={this.handler} /*ref={setNavigationBarRef}*/ />
      <header className="App-content">
        <Content page={this.state.selected}/>
      </header>
    </div>
  }

}

export default App;

/*
  <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
*/
