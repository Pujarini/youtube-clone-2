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
  // console.log(videos);
  return (
    <div className="basis-1/4  m-2 p-3 flex flex-col gap-5 overflow-y-auto">
      {videos &&
        videos.map((video) => {
          return <VideoListComponent video={video} />;
        })}
    </div>
  );
};

export default VideoListPanel;
