import { render } from '@testing-library/react';

import YouTube from './you-tube';

describe('YouTube', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<YouTube />);
    expect(baseElement).toBeTruthy();
  });
});
