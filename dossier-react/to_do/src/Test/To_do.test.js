import React from 'react';
import renderer from 'react-test-renderer';
import ReactTestRenderer from 'react-test-renderer';
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

  it('Checkbox component snapshot test', () => {
    const renderer = ReactTestRenderer.create(<TodoList />);
    let tree = renderer.toJSON();
    expect(tree).toMatchSnapshot();
  
    renderer.update(<TodoList checked={true} />);
    tree = renderer.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Todo list array is empty by default', () => {
    const renderer = ReactTestRenderer.create(<TodoList />);
    const tree = renderer.toJSON();
    expect(tree.children[1].children[0].children[1].children.length).toBe(0);
  });

  it('todo should be added to done when checkbox is checked', () => {
    const { getByPlaceholderText, getByText, getByLabelText } = render(<TodoList />);
    
    const input = getByPlaceholderText('tap here the todo...');
    const form = input.closest('form');
    
    fireEvent.change(input, { target: { value: 'Todo item' } });
    fireEvent.submit(form);
  
    const checkbox = getByLabelText('Todo item');
    fireEvent.click(checkbox);
  
    expect(getByText('Todo item')).not.toBeInTheDocument();
    expect(getByText('Todo item')).toBeInTheDocument();
  });
  

  it('renders correctly with an empty input', () => {
    const component = renderer.create(<TodoList />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

});