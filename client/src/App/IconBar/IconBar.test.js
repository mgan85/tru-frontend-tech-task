import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import IconBar from './IconBar';
import IconElement from './IconElement/IconElement';

configure({ adapter: new Adapter() });

describe('Tests for IconBar component', () => {
  let wrapper;
  let icons = [{ id: 1 }, { id: 2 }, { id: 3 }];

  beforeEach(() => {
    wrapper = shallow(<IconBar icons={icons} />);
  });

  it('component is rendered', () => {
    expect(wrapper.find('div').hasClass('IconBar')).toBeTruthy();
  });

  describe('Test DOM structure', () => {
    it('has all set icons', () => {
      expect(wrapper.find(IconElement)).toHaveLength(icons.length);
    });
  });
});
