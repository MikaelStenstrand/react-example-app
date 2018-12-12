import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import AnotherComponent from './components/AnotherComponent';

Enzyme.configure({ adapter: new Adapter() });

const testData = {
    name: 'my name',
    email: 'myemail@mail.com'
}; 

it('should render AnotherComponent withouth crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AnotherComponent data={testData}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
