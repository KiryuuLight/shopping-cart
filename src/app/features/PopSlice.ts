import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type PopState = boolean;

interface State {
  visible: PopState;
}

const initialState: State = {
  visible: false,
};

const popSlice = createSlice({
  name: 'pop',
  initialState,
  reducers: {
    turnOnOff(state, action: PayloadAction<PopState>) {
      state.visible = action.payload;
    },
  },
});

export const { turnOnOff } = popSlice.actions;
export default popSlice.reducer;
