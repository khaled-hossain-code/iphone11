import React from 'react';
import { shallow, mount } from 'enzyme';
import Icon from '../Icon';
import IconButton from './index';

const requiredProps = {
  icon: <Icon name="add" />,
};

const setup = props => {
  const output = shallow(<IconButton {...requiredProps} {...props} />);

  return output;
};

const setupUsingMount = props => {
  const output = mount(<IconButton {...requiredProps} {...props} />);

  return output;
};

describe('IconButton', () => {
  const iconBtnClass = 'icon-button';

  test('renders Icon Buttons', () => {
    const optionalProps = {
      size: 'tiny',
      dark: true,
      label: 'I am label',
      standalone: true,
      disabled: true,
    };
    const wrapper = setup(optionalProps);
    expect(wrapper).toMatchSnapshot();
  });

  test('should add provided className', () => {
    const className = 'dummy-class';
    const wrapper = setup({ className });
    const iconButton = wrapper.find(`.${className}`);
    expect(iconButton.length).toBe(1);
  });

  test('should add background color', () => {
    const style = {
      backgroundColor: '#fff',
    };
    const wrapper = setup({ style });
    const iconButton = wrapper.find(`.${iconBtnClass}`);
    expect(iconButton.get(0).props.style).toEqual(style);
  });

  test('should show label', () => {
    const label = 'dummy label';
    const wrapper = setup({ label });
    const Label = wrapper.find(`.icon-button__label`);
    expect(Label.length).toBe(1);
    expect(Label.text()).toMatch(label);
  });

  test('should show badge', () => {
    const wrapper = setupUsingMount({ badgeCount: 3 });
    const Label = wrapper.find(`.icon-button__badge`);
    expect(Label.length).toBe(1);
  });

  test('should call function onClick', () => {
    const onClick = jest.fn();
    const wrapper = setup({ onClick });
    const iconButton = wrapper.find(`.${iconBtnClass}`);

    iconButton.simulate('click');
    expect(onClick).toHaveBeenCalled();
  });

  test('should assign appropriate classes', () => {
    const optionalProps = {
      isIconOnly: true,
      standalone: true,
      dark: true,
      disabled: true,
    };
    const wrapper = setup(optionalProps);

    expect(wrapper.find('.icon-button--standalone').length).toBe(1);
    expect(wrapper.find('.icon-button-dark').length).toBe(1);
    expect(wrapper.find('.icon-button--disabled').length).toBe(1);
    expect(wrapper.find('.icon-button--icon-only').length).toBe(1);
  });

  test('should assign sizes properly', () => {
    const sizes = ['tiny', 'small', 'large', 'huge'];

    sizes.forEach(size => {
      const wrapper = setup({ size });
      const iconBtn = wrapper.find(`.icon-button--${size}`); 
      expect(iconBtn.length).toBe(1);
    });
  });
});
