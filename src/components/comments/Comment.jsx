import deleteIcon from "../../../public/images/icon-delete.svg";
import moment from "moment";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteHandler } from "@/redux/features/commentSlice";
import Image from "next/image";

const Comment = ({
  id,
  commentId,
  score: initialScore,
  createdAt,
  content,
}) => {
  const [score, setScore] = useState(initialScore);
  //   const [upScore, setUpScore] = useState(false);
  //   const [downScore, setDownScore] = useState(false);

  const dispatch = useDispatch();
  const deleteComment = () => {
    if (commentId) {
      dispatch(deleteHandler({ id, commentId }));
    } else {
      dispatch(deleteHandler({ id }));
    }
  };

  return (
    <>
      <div className="max-w-lg mx-auto border px-6 py-4 rounded-lg mb-5">
        <div className="flex items-center mb-6">
          <img
            src="https://randomuser.me/api/portraits/men/97.jpg"
            alt="Avatar"
            className="w-12 h-12 rounded-full mr-4"
          />
          <div>
            <div className="text-lg font-medium text-gray-800">John Doe</div>
            <div className="text-gray-500">
              {" "}
              <span>{moment(createdAt, "YYYY-MM-DTh:mm:ss a").fromNow()}</span>
            </div>
            <span>{score}</span>
          </div>
        </div>
        <p className="text-lg leading-relaxed mb-6">{content}</p>
        <div className="flex justify-between items-center">
          <div>
            <a href="#" className="text-gray-500 hover:text-gray-700 mr-4">
              <i className="far fa-thumbs-up"></i> Like
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-700">
              <i className="far fa-comment-alt"></i> Reply
            </a>
          </div>
          <button onClick={deleteComment}>
            <Image
              src={deleteIcon}
              alt="delete icon"
              className="w-10 h-10 fill"
            />
          </button>
          <div className="flex items-center">
            <a href="#" className="text-gray-500 hover:text-gray-700 mr-4">
              <i className="far fa-flag"></i> Report
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-700">
              <i className="far fa-share-square"></i> Share
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Comment;
