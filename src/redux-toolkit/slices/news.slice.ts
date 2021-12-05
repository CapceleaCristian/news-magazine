import {
  createAsyncThunk,
  createSlice,
  PayloadAction,
  SerializedError,
} from "@reduxjs/toolkit";
import { INews } from "../../models/news";
const NEWS_ENDPOINT =
  "https://finnhub.io/api/v1/company-news?symbol=AAPL&from=2021-03-01&to=2021-03-15&token=bpjsf67rh5r9328ecgvg";

export const NEWS_SLICE = "news";

export const getAllNewsRequest = createAsyncThunk(
  `${NEWS_SLICE}/getAllNews`,
  async () => {
    try {
      return await fetch(NEWS_ENDPOINT).then((res) => res.json());
    } catch (e) {
      console.log(e);
    }
  }
);

interface InitialState {
  loading: "idle" | "pending";
  data: INews[];
  bookmark: INews[];
  error: SerializedError | null;
}

const initialState: InitialState = {
  loading: "idle",
  data: [],
  bookmark: [],
  error: null,
};

export const NewsSlice = createSlice({
  name: NEWS_SLICE,
  initialState,
  reducers: {
    addNewsToBookMark: (state: InitialState, action: PayloadAction<INews>) => {
      const exist = state.bookmark.find((bm) => bm.id === action.payload.id);
      if (exist) {
        state.bookmark = state.bookmark.filter(
          (el) => el.id !== action.payload.id
        );
      } else {
        state.bookmark.push(action.payload);
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllNewsRequest.pending, (state: InitialState) => {
        state.loading = "pending";
      })
      .addCase(
        getAllNewsRequest.fulfilled,
        (state: InitialState, action: PayloadAction<INews[]>) => {
          state.loading = "idle";
          state.data = action.payload;
        }
      )
      .addCase(
        getAllNewsRequest.rejected,
        (state: InitialState, action: PayloadAction<any>) => {
          state.loading = "idle";
          state.error = action.payload;
        }
      );
  },
});
export const { addNewsToBookMark } = NewsSlice.actions;
export const NewsReducer = NewsSlice.reducer;
