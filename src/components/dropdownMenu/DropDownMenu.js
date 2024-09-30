import React, { Component } from "react";
import "./DropDownMenu.css"; // Import the CSS file

import { IoMenu } from "react-icons/io5";

class DropDownMenu extends Component {
  state = {
    isOpen: false,
  };

  toggleMenu = () => {
    this.setState((prevState) => ({ isOpen: !prevState.isOpen }));
  };

  render() {
    return (
      <div className="ddm">
        <div className="ddm-toggle" onClick={this.toggleMenu}>
          <IoMenu />
        </div>
        {this.state.isOpen && (
          <ul className="ddm-list">
            <li className="ddm-item">Option 1</li>
            <li className="ddm-item">Option 2</li>
            <li className="ddm-item">Option 3</li>
          </ul>
        )}
      </div>
    );
  }
}

export default DropDownMenu;
