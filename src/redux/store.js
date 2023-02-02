import { configureStore } from "@reduxjs/toolkit";
import LiveChat from "./liveChatSlice";
import panelSlice from "./panelSlice";
import Videos from "./videoSlice";

export const store = configureStore({
  reducer: {
    panel: panelSlice,
    liveChat: LiveChat,
    videoList: Videos,
  },
});
