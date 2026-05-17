import { configureStore } from '@reduxjs/toolkit';
import sampleListSlicer from '../features/sample-feature/sampleSlicer'; // Updated import

export const store = configureStore({
    reducer: {
        sampleList: sampleListSlicer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

