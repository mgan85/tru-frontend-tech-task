import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';

import App from './App';
import Measures from './Measures/Measures';
import IconBar from './IconBar/IconBar';

configure({ adapter: new Adapter() });

describe('Tests for App component', () => {
  let wrapper, instance;
  beforeEach(() => {
    wrapper = shallow(<App />);
    instance = wrapper.instance();
  });

  it('component is rendered', () => {
    expect(instance).toBeInstanceOf(App);
  });

  describe('Test DOM structure', () => {
    it('has one measure components', () => {
      expect(wrapper.find(Measures)).toHaveLength(1);
    });

    it('has three iconBar components', () => {
      expect(wrapper.find(IconBar)).toHaveLength(3);
    });
  });

  describe('test App component function', () => {
    it('check if dataChange function change data source ', () => {
      let currentDS = instance.state.dataSource;

      instance.changeData();
      expect(instance.state.dataSource === currentDS).toBeFalsy();

      instance.changeData();
      expect(instance.state.dataSource).toEqual(currentDS);
    });
  });
});
