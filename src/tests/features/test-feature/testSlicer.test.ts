// src/features/counter/counterSlice.test.ts
import counterReducer, { add } from '../../../features/sample-feature/sampleSlicer';

test('should handle add', () => {
  const previousState = { sampleList: [] };
  expect(counterReducer(previousState, add({ id: 1, text: 'Test', hasChecked: false }))).toEqual({ sampleList: [{ id: 1, text: 'Test', hasChecked: false }] });
});