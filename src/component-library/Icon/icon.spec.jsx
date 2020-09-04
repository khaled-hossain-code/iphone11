import React from 'react';
import { shallow } from 'enzyme';
import Icon from './index';

const requiredProps = {
  name: 'add',
};

const setupUsingShallow = props => {
  const output = shallow(<Icon {...requiredProps} {...props} />);

  return output;
};

describe('Icon', () => {
  test('should renders Icon', () => {
    const output = setupUsingShallow();
    expect(output).toMatchSnapshot();
  });

  test('should render right svg', () => {
    const output = setupUsingShallow({ name: 'sendMessage' });
    const svgElement = output.find('SvgSend_message');

    expect(svgElement.length).toBe(1);
  });

  test('should apply the fill in svg', () => {
    const output = setupUsingShallow({ fill: '#fff' });
    const svgElement = output.find('SvgAdd');

    expect(svgElement.get(0).props.style.fill).toEqual('#fff');
  });

  test('should render only icon (no tooltip, no label)', () => {
    const output = setupUsingShallow();

    expect(output.find('SvgAdd').length).toBe(1);
    expect(output.find('.icon__label').length).toBe(0);
    expect(output.find('.icon__tooltip').length).toBe(0);
  });

  test('should render icon label', () => {
    const output = setupUsingShallow({ iconLabel: 'This is a label', showLabel: true });

    expect(output.find('.icon__label').text()).toBe('This is a label');
  });

  test('should render tooltip', () => {
    const output = setupUsingShallow({ iconLabel: 'This is a label', showTooltip: true });

    expect(output.find('.icon__tooltip').text()).toBe('This is a label');
  });

  test('should render Background', () => {
    const output = setupUsingShallow({ showBGColor: true });

    expect(output.find('.icon__content').length).toBe(1);
  });

  test('should render different colors', () => {
    const colors = ['tertiary'];

    colors.forEach(color => {
      const output = setupUsingShallow({ color });

      expect(output.find(`.icon--${color}`).length).toBe(1);
    });
  });

  test('should render different sizes', () => {
    const sizes = ['tiny', 'small', 'normal', 'medium', 'large', 'huge', 'xl', 'xxl'];

    sizes.forEach(size => {
      const output = setupUsingShallow({ size });

      expect(output.find(`.icon--${size}`).length).toBe(1);
    });
  });
});
