import * as React from 'react';
import { mount } from 'enzyme';
import mountTest from '../../tests/mountTest';
import J from '../index';

mountTest(J);

describe('J', () => {
  it('render button count correctly', () => {
    const component = mount(<J title="Title">Test</J>);

    expect(component.find('button').text()).toBe('Test');
  });
});
