import React from 'react';
import { shallow } from 'enzyme';
import Button from './index';

describe(Button, () => {
  test('renders Buttons', () => {
    const output = shallow(
      <Button
        size="large"
        dark={true}
        submitType="submit"
        label="I am label"
        fullWidth={true}
        primary={true}
        type="danger"
      />
    );
    expect(output).toMatchSnapshot();
  });
});
