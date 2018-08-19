import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import QuestionResult from './QuestionResult';

configure({ adapter: new Adapter() });

//TODO: Why props category is undefined?
describe('Tests for IconElement component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<QuestionResult />);
    wrapper.setProps({ category: 'Product' });
  });

  it('component is rendered', () => {
    expect(wrapper.find('div').hasClass('QuestionResult')).toBeTruthy();
  });

  describe('Test DOM structure', () => {
    it('has input element', () => {
      expect(wrapper.find('input')).toHaveLength(1);
    });

    it('has caption', () => {
      expect(wrapper.find('label')).toHaveLength(1);
    });

    it('add css class for his category', () => {
      expect(wrapper.find('div').hasClass('Product')).toBeTruthy();
    });

    it('create text with value', () => {
      wrapper.setProps({
        rate: 2,
        upRange: 9,
        category: 'Product',
      });
      expect(wrapper.find('span').text()).toEqual('2   out of 9');
    });

    it('crate text about no value', () => {
      wrapper.setProps({
        question: 'Service',
        downRange: 3,
      });
      expect(wrapper.find('p')).toHaveLength(1);
      expect(wrapper.find('p').text()).toEqual('No data for Service yet');
    });
  });
});
