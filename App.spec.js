import React from 'react';
import { shallow } from 'enzyme';
import { Text, View, Button, Alert } from 'react-native';
import App from './App';

describe('App', () => {
  it('renders View', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(View)).toHaveLength(1);
  });
});

describe('within View', () => {
  it('renders Text with text "Aucun article"', () => {
    const wrapper = shallow(<App />);
    expect(
      wrapper.find(View).contains(<Text>Aucun article</Text>)
    ).toBeTruthy();
  });
  it('renders Button', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Button)).toHaveLength(1);
  });
  it('renders Alert', () => {
    const wrapper = shallow(<App />);
    Alert.alert = jest.fn();
    wrapper.find(Button).simulate('Press');
    expect(Alert.alert).toHaveBeenCalledWith('Touché');
  });
});
