import { Component, useRef } from "react";
import "./navigation.css";
import NavItem from "./navItem";

const navItems = [{"name":"Home"},{"name":"About Me"},{"name":"Socials"},{"name":"Portfolio"},{"name":"Get In Touch"}]
class Navigation extends Component {

  constructor(props) {
    super(props);

    this.handler = this.handler.bind(this)
    this.state = {selected: "Home"}
  }

  handler(name) {
    this.setState({selected: name})
  }

  render () {

    //https://stackoverflow.com/questions/32157286/rendering-react-components-from-array-of-objects
    const NavList = ({items}) => (
      <>
        {items.map(item => {
          if( this.state.selected === item.name ){
           return <NavItem title={item.name} key={item.name} handler={this.handler} style="selected"/>
          } else {
              return <NavItem title={item.name} key={item.name} handler={this.handler}/>
          }
        })}
      </>
    );

    
    return <div className="Navigation">
      <div className="Message">
        <h1>Hi!</h1>
        <h2>I'm Lachie</h2>
      </div>

      <ul >
        <NavList items={navItems}/>
      </ul>
    </div>
  }
}

export default Navigation;