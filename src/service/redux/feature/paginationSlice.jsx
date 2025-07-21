import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  from: 1,
  to: 10,
  total: 0,
};
const paginationSlice = createSlice({
  name: "pagination",
  initialState: initialState,

  reducers: {
    setRange: (state, action) => {
      const { from, to, total } = action.payload;
      (state.from = from), (state.to = to), (state.total = total);
    },
  },
});

export const { setRange } = paginationSlice.actions;
export default paginationSlice.reducer;
