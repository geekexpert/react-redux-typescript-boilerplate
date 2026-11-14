// src/store/localeSlice.ts
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import i18n from 'i18next';

interface LocaleState {
  currentLanguage: string;
}

const initialState: LocaleState = {
  currentLanguage: localStorage.getItem('i18nextLng') || 'en',
};

export const localeSlice = createSlice({
  name: 'locale',
  initialState,
  reducers: {
    setLanguage: (state, action: PayloadAction<string>) => {
      state.currentLanguage = action.payload;
      i18n.changeLanguage(action.payload); // Sync Redux state change with i18next
    },
  },
});

export const { setLanguage } = localeSlice.actions;
export default localeSlice.reducer;