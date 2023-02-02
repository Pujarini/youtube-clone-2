import { createSlice } from "@reduxjs/toolkit";

const liveChatSlice = createSlice({
  name: "liveChat",
  initialState: ["puja:hello", "xyz:wow"],
  reducers: {
    addChatItem: (state, action) => {
      state.splice(20, 1);
      state = state.unshift(action.payload);
    },
  },
});

export const { addChatItem } = liveChatSlice.actions;

export default liveChatSlice.reducer;
