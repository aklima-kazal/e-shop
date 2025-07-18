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
  },
});

export const { setCountInc, setCountDec } = counterSlice.actions;
export default counterSlice.reducer;
