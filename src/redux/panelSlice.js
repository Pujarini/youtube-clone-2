import { createSlice } from "@reduxjs/toolkit";

const panelSlice = createSlice({
  name: "panel",
  initialState: {
    visible: false,
  },
  reducers: {
    showPanel: (state) => {
      state.visible = !state.visible;
    },
  },
});

export const { showPanel } = panelSlice.actions;

export default panelSlice.reducer;
