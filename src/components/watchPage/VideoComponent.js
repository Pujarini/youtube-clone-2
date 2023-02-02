import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { hidePanel } from "../../redux/panelSlice";
import LiveChatComponent from "./LiveChatComponent";
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
      <div className="basis-1/4 m-2 flex flex-col">
        <LiveChatComponent />
        <VideoListPanel />
      </div>
    </div>
  );
};

export default VideoComponent;
