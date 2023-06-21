import React, { Component } from 'react';
import PropTypes from "prop-types";


export class Button extends Component {
    render() {
      const { onClick, children } = this.props;
      return <button className='button_load' onClick={onClick}>{children}</button>;
    }
  }

  Button.propTypes = {
    onClick: PropTypes.func.isRequired, 
    children: PropTypes.node.isRequired 
  };