import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

import Button from './Button';

class Modal extends Component {
  static propTypes = {
    toggleOverlay: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
    buttons: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string.isRequired,
        type: PropTypes.oneOf(['primary', 'secondary']).isRequired,
        callback: PropTypes.func.isRequired,
      }),
    ).isRequired,
  };

  componentDidMount() {
    document.addEventListener('keydown', this.escButtonHandling);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.escButtonHandling);
  }

  escButtonHandling = event => {
    const { toggleOverlay } = this.props;
    if (event.key === 'Escape' || event.keyCode === 27) {
      toggleOverlay();
    }
  };

  handelOutsideClick = e => {
    const { toggleOverlay } = this.props;

    if (this.node.contains(e.target)) {
      return false;
    }
    toggleOverlay();
  };

  render() {
    const {toggleOverlay, children, buttons } = this.props;

    return ReactDOM.createPortal(
      <div
        className="pop-over-wrapper"
        onClick={this.handelOutsideClick}
        role="alertdialog"
      >
        <div
          className="pop-over"
          ref={node => {
            this.node = node;
          }}
        >
          <a href="#" className="close-icon" onClick={toggleOverlay}>
            &#215;
          </a>
          {children}
          <div className="button-wrapper">
            {buttons &&
            buttons.length &&
            buttons.map((button, index) => (
              <Button
                type="button"
                onClick={button.callback}
                key={button.type}
                variant={button.type}
                size={buttons.length === 2 ? 'medium' : 'large'}
                classList={index === 0 ? 'left-button' : ''}
              >
                {button.label}
              </Button>
            ))}
          </div>
        </div>
      </div>,
      document.body
    );
  }
}

export default Modal;
