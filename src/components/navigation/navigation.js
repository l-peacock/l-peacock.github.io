import { Component } from "react";
import "./navigation.css";
import NavItem from "./navItem";
import menu from "./menu.svg";

const navItems = [{"name":"Home"},{"name":"About Me"},/*{"name":"Portfolio"},*/{"name":"Socials"},/*{"name":"Get In Touch"}*/]
class Navigation extends Component {

  constructor(props) {
    super(props);

    this.handler = this.handler.bind(this)
    this.state = {selected: "Home", menuToggle: "0"}
  }

  handler(name) {
    this.setState({selected: name, menuToggle: "0"})
    this.props.handler(name)
  }

  render () {

    //https://stackoverflow.com/questions/32157286/rendering-react-components-from-array-of-objects
    const NavList = ({items}) => (
      <>
        {items.map(item => {
          if( this.state.selected === item.name ){
           return <NavItem title={item.name} key={item.name} handler={this.handler} display="selected" toggled={this.state.menuToggle}/>
          } else {
              return <NavItem title={item.name} key={item.name} handler={this.handler} toggled={this.state.menuToggle}/>
          }
        })}
      </>
    );

    
    return <div className="Navigation" toggled={this.state.menuToggle}>
      <div className="MenuButtonParent">
        <img src={menu} className="MenuButton" onClick={() => this.setState({selected: this.state.selected, menuToggle: "1"})} toggled={this.state.menuToggle}/>
      </div>
      <ul className="NavListParent" toggled={this.state.menuToggle}>
        <NavList items={navItems} />
      </ul>
    </div>
  }
}

export default Navigation;