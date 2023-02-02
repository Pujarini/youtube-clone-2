import { useSelector } from "react-redux";
import { filters } from "../constants/constants";
const LeftPanel = () => {
  const displayPanel = useSelector((store) => store.panel.visible);

  if (displayPanel) {
    return (
      <div className="basis-1/4  h-screen p-5">
        <h3 className="font-bold m-2">Explore</h3>
        {filters.map((filter) => (
          <div className="m-2">{filter}</div>
        ))}
      </div>
    );
  }
};

export default LeftPanel;
