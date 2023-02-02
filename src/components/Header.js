import { useDispatch } from "react-redux";
import { togglePanel } from "../redux/panelSlice";
import SearchBar from "./SearchBar";

const Header = () => {
  const dispatch = useDispatch();

  return (
    <div className=" h-[80px] p-5 flex justify-between shadow-lg">
      <div className="flex gap-8">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/2048px-Hamburger_icon.svg.png"
          alt="menu-bar"
          className="h-[30px] cursor-pointer"
          onClick={() => dispatch(togglePanel())}
        />

        <img
          src="https://w7.pngwing.com/pngs/674/324/png-transparent-youtube-logo-music-video-computer-icons-youtube-logo-text-trademark-logo.png"
          alt="youtube-logo"
          className="h-[40px]"
        />
      </div>
      <SearchBar />
      <img
        src="https://e7.pngegg.com/pngimages/304/275/png-clipart-user-profile-computer-icons-profile-miscellaneous-logo-thumbnail.png"
        alt="user"
      />
    </div>
  );
};

export default Header;
