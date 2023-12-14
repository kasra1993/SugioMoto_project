import { useState } from "react";
import { useDispatch } from "react-redux";
import moment from "moment";
import { addNewComment } from "@/redux/features/commentSlice";

const CommentForm = () => {
  const [inputValue, setInputValue] = useState("");
  const [rating, setRating] = useState(5);
  const dispatch = useDispatch();

  const calculateDate = () => {
    const timestamp = moment().format("YYYY-MM-DTh:mm:ss a");
    return timestamp;
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const date = calculateDate();

    if (inputValue.trim().length === 0) {
      return;
    }
    inputValue, "this is the comment";
    dispatch(
      addNewComment({
        content: inputValue.trim(),
        createdAt: date,
        score: rating,
      })
    );

    setInputValue("");
  };

  const enterPressed = (e) => {
    if (e.keyCode === 13 && e.shiftKey === false) {
      e.preventDefault();
      submitHandler(e);
    }
  };

  return (
    <div className="w-[400px] md:w-[700px] h-auto flex justify-center items-center my-10">
      <div className="md:h-[350px] px-7 w-[700px] rounded-[12px] bg-white p-4 shadow-md border">
        <p className="text-xl font-semibold text-blue-900 cursor-pointer transition-all hover:text-black">
          Add Comment
        </p>
        <form onSubmit={submitHandler} className="">
          <textarea
            value={inputValue}
            className="h-40 px-3 text-sm py-1 mt-5 outline-none border-gray-300 w-full resize-none border rounded-lg placeholder:text-sm"
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Add a comment..."
            onKeyDown={enterPressed}
          ></textarea>
          <label
            htmlFor="score"
            className="text-sm font-semibold text-blue-900 cursor-pointer transition-all hover:text-black"
          >
            Enter Rating
          </label>

          <input
            type="number"
            name="score"
            id="score"
            placeholder="0"
            className="p-1 border-slate-300 border ml-10 rounded-xl pl-3 "
            min="1"
            max="5"
            onChange={(e) => setRating(e.target.value)}
          />

          <div className="flex justify-between mt-2">
            <p className="text-sm text-blue-900 ">
              Enter atleast 15 characters
            </p>
            <button className="h-12 w-[150px] bg-blue-400 text-sm text-white rounded-lg transition-all cursor-pointer hover:bg-blue-600 ">
              Submit comment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CommentForm;
