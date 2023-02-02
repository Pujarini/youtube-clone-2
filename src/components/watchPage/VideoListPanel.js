import VideoListComponent from "./VideoListComponent";
import { useEffect, useState } from "react";
import { fetchVideos } from "../../constants/fetchVideos";

const VideoListPanel = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    fetchVideoList();
  }, []);

  const fetchVideoList = async () => {
    const data = await fetchVideos();
    setVideos(data);
  };

  return (
    <div className="flex flex-col gap-5 overflow-y-auto flex-1">
      {videos &&
        videos.map((video) => {
          return <VideoListComponent video={video} />;
        })}
    </div>
  );
};

export default VideoListPanel;
