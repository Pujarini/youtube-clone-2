import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchVideos } from "../constants/fetchVideos";
import { cacheVideoList, clearVideos, filterVideos } from "../redux/videoSlice";

const SearchBar = () => {
  const [search, setSearch] = useState("");

  const dispatch = useDispatch();

  const videos = useSelector((store) => store.videoList.videos);

  const searchHandler = (e) => {
    setSearch(e.target.value);
  };

  const fetchVideoList = async () => {
    const data = await fetchVideos();
    dispatch(cacheVideoList(data));
  };

  const searchVideos = (keyword) => {
    let filteredVideos = [];
    if (keyword.length) {
      filteredVideos = videos.filter((video) =>
        video?.snippet?.title.toLowerCase().includes(keyword)
      );
    }
    if (filteredVideos.length) {
      dispatch(filterVideos(filteredVideos));
    } else {
      dispatch(clearVideos());
    }

    if (!keyword) {
      fetchVideoList();
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => searchVideos(search), 1000);
    return () => clearTimeout(timer);
    // eslint-disable-next-line
  }, [search]);

  return (
    <div>
      <input
        type="text"
        placeholder="search"
        className="w-80 outline-none rounded-full h-[30px] p-5 border-slate-400 border"
        value={search}
        onChange={searchHandler}
      />
    </div>
  );
};

export default SearchBar;
