import Comment from "./Comment";
import { Oval } from "react-loader-spinner";

import { useSelector } from "react-redux";

const CommentsList = () => {
  const comments = useSelector((state) => state.comments.items);
  return (
    <div className="md:w-[500px] mx-auto">
      {comments ? (
        comments.map((comment) => {
          return (
            <>
              <Comment
                key={comment.id}
                id={comment.id}
                createdAt={comment.createdAt}
                score={comment.score}
                content={comment.content}
              />
            </>
          );
        })
      ) : (
        <Oval
          ariaLabel="loading-indicator"
          height={100}
          width={100}
          strokeWidth={4}
          color="hsl(238, 40%, 52%)"
          secondaryColor="hsl(239, 57%, 85%)"
        />
      )}
    </div>
  );
};

export default CommentsList;
