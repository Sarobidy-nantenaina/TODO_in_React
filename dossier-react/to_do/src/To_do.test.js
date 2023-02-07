import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import TodoList from './To_do';

let container;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it('adds a todo', () => {
  act(() => {
    render(<TodoList />, container);
  });
  const input = container.querySelector('input[type="text"]');
  const form = container.querySelector('form');
  act(() => {
    input.value = 'Learn Jest';
    form.dispatchEvent(new Event('submit', { bubbles: true }));
  });
  expect(container.textContent).toContain('Learn Jest');
});

it('moves a todo to done', () => {
  act(() => {
    render(<TodoList />, container);
  });
  const input = container.querySelector('input[type="text"]');
  const form = container.querySelector('form');
  act(() => {
    input.value = 'Learn Jest';
    form.dispatchEvent(new Event('submit', { bubbles: true }));
  });
  const checkbox = container.querySelector('input[type="checkbox"]');
  act(() => {
    checkbox.dispatchEvent(new Event('click', { bubbles: true }));
  });
  expect(container.textContent).toContain('Learn Jest');
});

