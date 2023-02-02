import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchVideos } from "../constants/fetchVideos";
import { cacheVideoList } from "../redux/videoSlice";
import VideoCard from "./VideoCard";

const VideoList = () => {
  const videos = useSelector((store) => store.videoList.videos);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!videos.length) {
      fetchVideoList();
    }
    // eslint-disable-next-line
  }, []);

  const fetchVideoList = async () => {
    const data = await fetchVideos();
    dispatch(cacheVideoList(data));
  };

  return (
    <div className="flex gap-5 flex-wrap w-full">
      {!videos.length ? (
        <div>No videos found </div>
      ) : (
        videos.map((video) => {
          return <VideoCard video={video} key={video.id} />;
        })
      )}
    </div>
  );
};

export default VideoList;
