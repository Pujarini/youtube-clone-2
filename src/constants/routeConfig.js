import MainBody from "../components/MainBody";
import VideoComponent from "../components/watchPage/VideoComponent";

export const routeConfig = [
  {
    path: "/",
    element: <MainBody />,
  },
  {
    path: "/watch",
    element: <VideoComponent />,
  },
];
