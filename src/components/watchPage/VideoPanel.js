import { useSearchParams } from "react-router-dom";
import NestedComments from "./NestedComments";

const VideoPanel = () => {
  const [data] = useSearchParams();

  console.log(data.get("v"));

  const params = data.get("v");
  return (
    <div className="basis-3/4  m-2 p-5">
      <iframe
        width="860"
        height="515"
        src={`https://www.youtube.com/embed/${params}?start=1`}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
        className="rounded-sm w-full"
      ></iframe>
      <NestedComments />
    </div>
  );
};

export default VideoPanel;
