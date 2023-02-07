import React from 'react';
import renderer from 'react-test-renderer';
import { render, fireEvent } from "@testing-library/react"; 
import TodoList from '../To_do';

describe('TodoList', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<TodoList />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders with an empty input default", () => {
    const { getByPlaceholderText } = render(<TodoList />);
    const input = getByPlaceholderText("tap here the todo...");
    expect(input.value).toEqual("");
  });

  it('renders todos as an empty array by default', () => {
    const component = renderer.create(<TodoList />);
    const instance = component.getInstance();
    if (instance) {
      expect(instance.state.todos).toEqual([]);
    } else {
      throw new Error('Cannot get instance of TodoList component');
    }
  });

  it('renders done as an empty array by default', () => {
    const component = renderer.create(<TodoList />);
    const instance = component.getInstance();
    if (instance) {
      expect(instance.state.done).toEqual([]);
    } else {
      throw new Error('Cannot get instance of TodoList component');
    }
  });

  it('renders correctly with an empty input', () => {
    const component = renderer.create(<TodoList />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

});
