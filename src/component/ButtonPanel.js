import Button from "./Button";
import React from "react";
import PropTypes from "prop-types";

import "./ButtonPanel.css";

export const SWITCH_BUTTON = "⇅";
export const CLEAR_BUTTON = "AC";
export const BACKSPACE_BUTTON = "⌫";

class ButtonPanel extends React.Component {
  handleClick = this.props.clickHandler;

  render() {
    return (
      <div className="component-button-panel">
        <div className="row">
          <Button name={SWITCH_BUTTON} clickHandler={this.handleClick} icon />
          <Button name={CLEAR_BUTTON} clickHandler={this.handleClick} icon />
          <Button name={BACKSPACE_BUTTON} clickHandler={this.handleClick} icon />
        </div>
        <div className="row">
          <Button name="7" clickHandler={this.handleClick} />
          <Button name="8" clickHandler={this.handleClick} />
          <Button name="9" clickHandler={this.handleClick} />
        </div>
        <div className="row">
          <Button name="4" clickHandler={this.handleClick} />
          <Button name="5" clickHandler={this.handleClick} />
          <Button name="6" clickHandler={this.handleClick} />
        </div>
        <div className="row">
          <Button name="1" clickHandler={this.handleClick} />
          <Button name="2" clickHandler={this.handleClick} />
          <Button name="3" clickHandler={this.handleClick} />
        </div>
        <div className="row">
          <Button name="0" clickHandler={this.handleClick} wide />
          <Button name="000" clickHandler={this.handleClick} />
          <Button name="." clickHandler={this.handleClick} />
        </div>
      </div>
    );
  }
}
ButtonPanel.propTypes = {
  clickHandler: PropTypes.func,
};
export default ButtonPanel;
