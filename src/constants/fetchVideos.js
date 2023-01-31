import { GOOGLE_KEY } from "./constants";

export const fetchVideos = async () => {
  const response = await fetch(
    "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&maxResults=30&chart=mostPopular&regionCode=US&key=" +
      GOOGLE_KEY
  );
  const data = await response.json();
  return data.items;
};
