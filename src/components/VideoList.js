import { useEffect, useState } from "react";
import { fetchVideos } from "../constants/fetchVideos";
import VideoCard from "./VideoCard";

const VideoList = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    fetchVideoList();
  }, []);

  const fetchVideoList = async () => {
    const data = await fetchVideos();
    setVideos(data);
  };

  console.log(videos);
  return (
    <div className="flex gap-5 flex-wrap w-full">
      {videos &&
        videos.map((video) => {
          return <VideoCard video={video} key={video.id} />;
        })}
    </div>
  );
};

export default VideoList;
