import React from "react";
import "./navItem.css";

class NavItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selected: false };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.setState({ selected: !this.state.selected });
    console.log(this.props.title);
    //console.log("Nav item clicked");
  }

  render() {
    if (this.state.selected) {
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
