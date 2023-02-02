import { createSlice } from "@reduxjs/toolkit";

const panelSlice = createSlice({
  name: "panel",
  initialState: {
    visible: false,
  },
  reducers: {
    togglePanel: (state) => {
      state.visible = !state.visible;
    },
    hidePanel: (state) => {
      state.visible = false;
    },
    showPanel: (state) => {
      state.visible = true;
    },
  },
});

export const { togglePanel, hidePanel, showPanel } = panelSlice.actions;

export default panelSlice.reducer;
