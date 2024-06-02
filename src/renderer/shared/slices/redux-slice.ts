import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { IChatBubble, IMainState, TAppearanceMode } from '../types';

const initialState: IMainState = {
  chat: [],
  user_details: {
    id: 600,
    name: 'Favoursnazy',
    phone_number: '234 903 217 486',
    profile_image:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/521.jpg',
  },
  mode: 'light',
};

export const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    updateChat: (state, action: PayloadAction<IChatBubble>) => {
      state.chat.push(action.payload);
    },
    setAppeareneMode: (state, action: PayloadAction<TAppearanceMode>) => {
      state.mode = action.payload;
    },
  },
});

export const { updateChat, setAppeareneMode } = mainSlice.actions;

export default mainSlice.reducer;
