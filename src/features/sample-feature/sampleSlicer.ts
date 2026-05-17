import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export interface SampleItem {
    id: number;
    text: string;
    hasChecked: boolean;
}
export interface SampleListState {
    sampleList: SampleItem[];
}
const initialState: SampleListState = {
    sampleList: []
}

const sampleListSlicer = createSlice({
  name: 'sample',
  initialState,
  reducers: {
    add: (state, action:PayloadAction<SampleItem>) => {
        state.sampleList.push(action.payload);
    },
    hasChecked: (state, action:PayloadAction<number>) => { 
        const sampleItem = state.sampleList.find(todo => todo.id === action.payload);
        if (sampleItem) {
            sampleItem.hasChecked = true;
        }
    }
  }
});

export const {add, hasChecked} = sampleListSlicer.actions;

export default sampleListSlicer.reducer;