import {combineReducers, configureStore} from "@reduxjs/toolkit";
import userReducer from "./reducers/UserSlice";
import {PostAPI} from "../serivces/PostService";

const rootReducer = combineReducers({
  userReducer,
  [PostAPI.reducerPath]: PostAPI.reducer
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => {
      return  getDefaultMiddleware().concat(PostAPI.middleware);
    }
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
