import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import IconElement from './IconElement';

configure({ adapter: new Adapter() });

describe('Tests for IconElement component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<IconElement />);
  });

  it('component is rendered', () => {
    expect(wrapper.find('div').hasClass('Icon')).toBeTruthy();
  });

  describe('Test DOM structure', () => {
    it('has img element', () => {
      expect(wrapper.find('img')).toHaveLength(1);
    });

    it('has label element', () => {
      wrapper.setProps({ label: 'Icon' });
      expect(wrapper.find('label')).toHaveLength(1);
    });

    it('has correct label element', () => {
      wrapper.setProps({ label: 'Icon' });
      expect(wrapper.find('label').text()).toBe('Icon');
    });

    it('is without label element', () => {
      expect(wrapper.find('label')).toHaveLength(0);
    });

    it('has default css class Left', () => {
      expect(wrapper.find('div').hasClass('Left')).toBeTruthy();
    });

    it('has css class for his position', () => {
      wrapper.setProps({ position: 'Right' });
      expect(wrapper.find('div').hasClass('Right')).toBeTruthy();
    });
  });
});
