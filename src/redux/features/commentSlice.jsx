import { createSlice } from "@reduxjs/toolkit";

const commentsSlice = createSlice({
  name: "comments",
  initialState: {
    items: [],
  },
  reducers: {
    addNewComment(state, action) {
      const id = Math.floor(Math.random() * 100000);
      const newComment = {
        id: id,
        content: action.payload.content,
        score: action.payload.score,
        createdAt: action.payload.createdAt,
      };
      state.items.push(newComment);
      state.totalLength++;
    },

    deleteHandler(state, action) {
      if (!action.payload.commentId) {
        const deletedCommentIndex = state.items.findIndex(
          (comment) => comment.id === action.payload.id
        );
        state.items.splice(deletedCommentIndex, 1);
      } else {
        state.totalLength--;
      }
    },
  },
});

export const { addNewComment, deleteHandler } = commentsSlice.actions;
export default commentsSlice.reducer;
