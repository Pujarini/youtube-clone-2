import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  generateMessage,
  generateName,
} from "../../constants/randomMessageGenerator";
import { addChatItem } from "../../redux/liveChatSlice";
import ChatComponent from "./ChatComponent";

const LiveChatComponent = () => {
  const [comment, setComment] = useState("");
  const chat = useSelector((store) => store.liveChat);
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setInterval(() => {
      const message = generateName() + ":" + generateMessage(20);
      dispatch(addChatItem(message));
    }, 1000);

    return () => clearInterval(timer);
    // eslint-disable-next-line
  }, []);

  const addCommentHandler = (e) => {
    e.preventDefault();
    const data = generateName() + ":" + comment;
    dispatch(addChatItem(data));
    setComment("");
  };

  return (
    <div className="border border-slate-300 flex flex-col p-2 m-2">
      <ChatComponent chat={chat} />
      <form onSubmit={addCommentHandler}>
        <input
          placeholder="add comment"
          value={comment}
          className="border border-slate-200 p-2 rounded-lg w-full"
          onChange={(e) => setComment(e.target.value)}
        />
      </form>
    </div>
  );
};

export default LiveChatComponent;
