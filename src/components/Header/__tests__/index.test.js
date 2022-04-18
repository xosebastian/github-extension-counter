/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render } from '@testing-library/react';
import Header from '../index';

const getRenderedComponent = () => render(<Header />);

describe('<Header/>', () => {
  it('Must render the component', () => {
    const { baseElement } = getRenderedComponent();
    expect(baseElement).toMatchSnapshot();
  });

  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    getRenderedComponent();
    expect(spy).not.toHaveBeenCalled();
  });
});
