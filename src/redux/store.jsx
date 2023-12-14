import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "@/redux/features/cartSlice";
import commentsReducer from "@/redux/features/commentSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    comments: commentsReducer,
  },
});
