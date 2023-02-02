const Comment = ({ name, comment }) => {
  return (
    <div className="border border-slate-100 p-5 m-2">
      <button className="rounded-full border border-slate-200  p-2 bg-slate-300">
        {name}
      </button>
      <div>{comment}</div>
    </div>
  );
};

export default Comment;
