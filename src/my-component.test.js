import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import ReactDOM from 'react-dom';
import MyComponent from './components/MyComponent';
import AnotherComponent from './components/AnotherComponent';
import { shallow } from 'enzyme';

Enzyme.configure({ adapter: new Adapter() });



it('should render MyComponent withouth crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MyComponent />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('MyComponent should render AnotherComponent', () => {
  const wrapper = shallow(<MyComponent />);
  const condition = wrapper.find(AnotherComponent).length;
  expect(condition).toEqual(1);
});

it('MyComponent should render AnotherComponent', () => {
  const wrapper = shallow(<MyComponent />);
  const condition = wrapper.containsMatchingElement(AnotherComponent);
  expect(condition).toBeTruthy()
});
