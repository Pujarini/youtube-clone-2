const VideoCard = ({ video }) => {
  const { title, channelTitle, thumbnails } = video?.snippet;
  const { viewCount } = video?.statistics;
  return (
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
  );
};

export default VideoCard;
