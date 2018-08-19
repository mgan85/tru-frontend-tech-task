import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import Measures from './Measures';
import Loader from './Loader/Loader';
import QuestionResult from './QuestionResult/QuestionResult';

configure({ adapter: new Adapter() });

//TODO: Create this test after learn more about async test
describe('Tests for Measures component', () => {
  /*let wrapper, instance;
    beforeEach(() => {
        wrapper = shallow(<Measures/>);
        instance = wrapper.instance();
    })*/

  it('component is rendered', () => {
    //expect(instance).toBeInstanceOf(Measures);
  });

  describe('Test DOM structure', () => {
    /*it('show Loader', () => {
            wrapper.setProps({loading: true})
            expect(wrapper.find(Loader)).toHaveLength(1);
        });

        it('has all set questions', () => {
            let questions = [{id: 1}, {id: 2}, {id: 3}, {id: 4}];
            wrapper.setState({measures: questions, loading: false});
            expect(wrapper.find(QuestionResult)).toHaveLength(questions.length);
        });*/
  });
});
