import { createSelector } from "reselect";

export const isLoadingSelector = createSelector(
  state => state.app,
  app => app.isLoading
)

export const userSelector = createSelector(
  state => state.app.user,
  user => user.user
)