import { Link } from "react-router-dom";

const VideoListComponent = ({ video }) => {
  const { title, thumbnails, channelTitle } = video?.snippet;
  const { viewCount } = video?.statistics;
  const { id } = video;

  return (
    <Link to={`/watch?v=${id}`}>
      <div className="flex border border-slate-200">
        <img
          src={thumbnails?.default?.url}
          alt="thumbnail"
          className="object-fit"
        />
        <div className="flex flex-col p-2">
          <div className="w-full">{title}</div>
          <div className="text-slate-400">{channelTitle}</div>
          <div className="text-slate-400">{viewCount} views</div>
        </div>
      </div>
    </Link>
  );
};

export default VideoListComponent;
