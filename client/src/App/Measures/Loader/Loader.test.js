import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import Loader from './Loader';

configure({ adapter: new Adapter() });

describe('Tests for Loader component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Loader />);
  });

  it('component is rendered', () => {
    expect(wrapper.find('div').hasClass('Loader')).toBeTruthy();
  });

  describe('Test DOM structure', () => {
    it('input has set id', () => {
      let id = 'testID';
      wrapper.setProps({ id: id });
      expect(wrapper.find('input#' + id)).toHaveLength(1);
    });
  });
});
