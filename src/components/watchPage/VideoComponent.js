import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { hidePanel } from "../../redux/panelSlice";
import VideoListPanel from "./VideoListPanel";
import VideoPanel from "./VideoPanel";

const VideoComponent = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(hidePanel());
    // eslint-disable-next-line
  }, []);

  return (
    <div className="flex w-full h-screen">
      <VideoPanel />
      <VideoListPanel />
    </div>
  );
};

export default VideoComponent;
