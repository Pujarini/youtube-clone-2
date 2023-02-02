const ChatComponent = ({ chat }) => {
  return (
    <div className="overflow-y-auto flex flex-col-reverse h-[400px]">
      {chat &&
        chat.map((msg) => {
          return (
            <div className=" mb-2 p-2 shadow-sm border-slate-200 border text-left">
              {msg}
            </div>
          );
        })}
    </div>
  );
};

export default ChatComponent;
