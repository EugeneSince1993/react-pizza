import React from 'react';

// classnames package installed, 1.18.40

class Button extends React.Component {

  render() {
    return <button className={`button ${this.props.outline ? 'button--outline' : ''}`}>{this.props.children}</button>;
  }

}

export default Button;
