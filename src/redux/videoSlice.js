import { createSlice } from "@reduxjs/toolkit";

const videosList = createSlice({
  name: "videos",
  initialState: {
    videos: [],
  },
  reducers: {
    cacheVideoList: (state, action) => {
      state.videos = action.payload;
    },
    filterVideos: (state, action) => {
      state.videos = action.payload;
    },
    clearVideos: (state) => {
      state.videos = [];
    },
  },
});

export const { cacheVideoList, filterVideos, clearVideos } = videosList.actions;
export default videosList.reducer;
