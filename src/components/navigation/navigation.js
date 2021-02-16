import { Component } from "react";
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
    this.props.handler(name)
  }

  render () {

    //https://stackoverflow.com/questions/32157286/rendering-react-components-from-array-of-objects
    const NavList = ({items}) => (
      <>
        {items.map(item => {
          if( this.state.selected === item.name ){
           return <NavItem title={item.name} key={item.name} handler={this.handler} display="selected"/>
          } else {
              return <NavItem title={item.name} key={item.name} handler={this.handler}/>
          }
        })}
      </>
    );

    
    return <div className="Navigation">
      <ul >
        <NavList items={navItems}/>
      </ul>
    </div>
  }
}

export default Navigation;