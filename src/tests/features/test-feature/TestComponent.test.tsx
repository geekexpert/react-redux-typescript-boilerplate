// src/features/sample-feature/SampleComponent.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../../app/store';
import  {SampleComponent}  from '../../../features/sample-feature/SampleComponent';

test('increments count on button click', () => {
  render(
    <Provider store={store}>
      <SampleComponent />
    </Provider>
  );

  fireEvent.click(screen.getByText('Add Item'));
  expect(screen.getByText('Add an item:')).toBeDefined();
});