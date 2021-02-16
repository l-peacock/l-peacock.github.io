import React from "react";
import "./navItem.css";

class NavItem extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }


  handleClick(e) {
    e.preventDefault();
    this.props.handler(this.props.title)

  }

  render() {
    if (this.props.style) {
      return (
        <li className="Selected" onClick={this.handleClick}>
          {this.props.title}
        </li>
      );
    } else {
      return <li onClick={this.handleClick}>{this.props.title}</li>;
    }
  }
}

export default NavItem;
