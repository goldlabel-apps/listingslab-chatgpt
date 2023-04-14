import {AppThunk} from "../store"

export const start = (): AppThunk => async (dispatch: any) => {
  try {
    console.log("start")
  } catch (error: any) {
    console.log("start", error)
  }
};
