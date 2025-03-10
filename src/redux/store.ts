import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import githubReducer from "./slice/githubUserSlice";

const rootReducer = combineReducers({
  github: githubReducer,
});

export const setupStore = () =>
  configureStore({
    reducer: rootReducer,
  });

export const store = setupStore();

setupListeners(store.dispatch);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
