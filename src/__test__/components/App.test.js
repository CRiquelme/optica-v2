import React from 'react';
import { mount } from 'enzyme';
import App from '../../App';

describe('<App />', () => {
  const footer = mount(<App />);
  test('Render del componente Footer', () => {
    expect(footer.length).toEqual(1);
  });
  test('Render del título', () => {
    expect(footer.find('.hola').text()).toEqual('jaja');
  });
});



