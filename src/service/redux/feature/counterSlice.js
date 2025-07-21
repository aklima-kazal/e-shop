import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",

  initialState: {
    count: 1,
  },
  reducers: {
    setCountInc: (state) => {
      state.count += 1;
    },
    setCountDec: (state) => {
      state.count -= 1;
    },
    setCountReset: (state) => {
      state.count = 1;
    },
    setCountValue: (state, action) => {
      state.count = action.payload;
    },
  },
});

export const { setCountInc, setCountDec, setCountReset, setCountValue } =
  counterSlice.actions;
export default counterSlice.reducer;
