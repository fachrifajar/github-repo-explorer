import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { GithubUser, RepoResponse } from "../../types";
import { RootState } from "../store";

export type SearchState = {
  q: string;
  value: string;
};

export type GithubInitialState = {
  data: GithubUser[];
  isFetching: boolean;
  search: SearchState;
  repos: { url: string; repos: RepoResponse[] }[]; 
};

const initialState: GithubInitialState = {
  data: [],
  isFetching: false,
  search: { q: "", value: "" },
  repos: [],
};

export const configSlice = createSlice({
  name: "config",
  initialState,
  reducers: {
    setCurrentGithubUsernames: (state, action: PayloadAction<GithubUser[]>) => {
      state.data = action.payload;
    },
    setFetchingState: (state, action: PayloadAction<boolean>) => {
      state.isFetching = action.payload;
    },
    setSearch: (state, action: PayloadAction<Partial<SearchState>>) => {
      state.search = { ...state.search, ...action.payload };
    },
    setRepos: (
      state,
      action: PayloadAction<{ url: string; repos: RepoResponse[] }>
    ) => {
      const { url, repos } = action.payload;

      // Check if the URL already exists in the repos cache
      const existingRepoIndex = state.repos.findIndex((repo) => repo.url === url);
      if (existingRepoIndex !== -1) {
        // Update existing entry
        state.repos[existingRepoIndex].repos = repos;
      } else {
        // Add new entry
        state.repos.push({ url, repos });
      }
    },
  },
});

export const {
  setCurrentGithubUsernames,
  setFetchingState,
  setSearch,
  setRepos,
} = configSlice.actions;

export const selectCurrentGithubUser = (state: RootState) => state.github.data;

export default configSlice.reducer;