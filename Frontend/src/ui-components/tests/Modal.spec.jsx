import React from 'react';
import { shallow,mount } from 'enzyme';

import Modal from '../Modal';

describe('Modal', () => {
  const toggleOverlayMock = jest.fn();

  const props = {
    toggleOverlay: toggleOverlayMock,
    children: <div className="some-name">Some text</div>,
    buttons: [
      {
        label: 'Some Button',
        type: 'primary',
        callback: jest.fn(),
      },
      {
        label: 'cancel',
        type: 'secondary',
        callback: jest.fn(),
      },
    ],
  };

  it('should match with snapshot', () => {
    const component = shallow(<Modal {...props} />);

    expect(component.debug()).toMatchSnapshot();
  });

  it('should not have button wrapper', () => {
    const newProps = {
      ...props,
      buttons: [],
    };
    const component = shallow(<Modal {...newProps} />);

    expect(component.find('ButtonWithTheme').length).toBe(0);
  });

  describe('handelOutsideClick', () => {
    const component = mount(<Modal {...props} />);

    const modal = component.find('Modal');

    it('should not close modal on clicking on modal box', () => {
      modal.find('.pop-over').simulate('click');

      expect(toggleOverlayMock).not.toHaveBeenCalled();
    });

    it('should close modal on clicking on modal box wrapper', () => {
      modal.find('.pop-over-wrapper').simulate('click');

      expect(toggleOverlayMock).toHaveBeenCalled();
    });
  });
});
