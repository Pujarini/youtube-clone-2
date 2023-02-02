import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routeConfig } from "../constants/routeConfig";
import { showPanel } from "../redux/panelSlice";
import LeftPanel from "./LeftPanel";

const router = createBrowserRouter(routeConfig);

const Body = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(showPanel());
    // eslint-disable-next-line
  }, []);

  return (
    <div className="flex m-2">
      <LeftPanel />
      <RouterProvider router={router} />
    </div>
  );
};

export default Body;
