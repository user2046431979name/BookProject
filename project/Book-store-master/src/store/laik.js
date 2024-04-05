import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  laik: [], // Изначально данные пользователя пусты
};

const loadUserFromLocalStorage = () => {
  try {
    const laikData = localStorage.getItem('laik');
    if (laikData) {
      return JSON.parse(laikData);
    }
  } catch (error) {
    console.error('Error loading user from localStorage:', error);
  }
  return [];
};

const laik = createSlice({
  name: 'laik',
  initialState: {
    ...initialState,
    laik: loadUserFromLocalStorage(),
  },
  reducers: {
    addToLaik: (state, action) => {
      state.laik.push(action.payload);
      try {
        localStorage.setItem('laik', JSON.stringify(state.laik));
      } catch (error) {
        console.error('Error saving user to localStorage:', error);
      }
    },
    removeFromLaik: (state, action) => {
      const idToRemove = action.payload;
      state.laik = state.laik.filter(item => item.id !== idToRemove);
      try {
        localStorage.setItem('laik', JSON.stringify(state.laik));
      } catch (error) {
        console.error('Error saving user to localStorage:', error);
      }
    },
  },
});


export const { addToLaik, removeFromLaik, } = laik.actions;
export default laik.reducer;