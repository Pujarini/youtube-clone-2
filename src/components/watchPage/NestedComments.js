import { nestedComments } from "../../constants/constants";
import Comment from "./Comment";

const NestedComments = () => {
  const renderListOfComments = (comments) => {
    return comments.map((comment) => {
      return (
        <div>
          <Comment name={comment.name} comment={comment.comment} />

          {comment.replies && (
            <div className="m-5">{renderListOfComments(comment.replies)}</div>
          )}
        </div>
      );
    });
  };
  return (
    <div className="bg-slate-300 p-2 m-2">
      {renderListOfComments(nestedComments)}
    </div>
  );
};

export default NestedComments;
