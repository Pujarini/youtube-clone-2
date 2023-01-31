import { configureStore } from "@reduxjs/toolkit";
import LiveChat from "./liveChatSlice";
import panelSlice from "./panelSlice";

export const store = configureStore({
  reducer: {
    panel: panelSlice,
    liveChat: LiveChat,
  },
});
