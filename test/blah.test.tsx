import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ReactHeightAutoTransition } from '../src';

describe('it', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    //
    ReactDOM.render(
      <ReactHeightAutoTransition>
        <div>test</div>
      </ReactHeightAutoTransition>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
