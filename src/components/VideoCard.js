import { Link } from "react-router-dom";

const VideoCard = ({ video }) => {
  const { title, channelTitle, thumbnails } = video?.snippet;
  const { viewCount } = video?.statistics;
  const { id } = video;

  return (
    <Link to={`/watch?v=${id}`}>
      <div className="w-[320px] h-[350px]  flex flex-col rounded-lg">
        <img
          src={thumbnails?.maxres?.url}
          alt="thumbnail"
          className="w-[500px] rounded-lg"
        />
        <div className="p-2">
          <div className="font-bold">{title}</div>
          <div className="text-slate-400">{channelTitle}</div>
          <div className="text-slate-400">{viewCount} views</div>
        </div>
      </div>
    </Link>
  );
};

export default VideoCard;
