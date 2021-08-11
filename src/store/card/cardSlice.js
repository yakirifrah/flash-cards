import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as Api from '../../api';

const initialState = {
  entities: [],
  loading: 'fin',
  currentRequestId: '',
  error: '',
};

const fetchData = createAsyncThunk('card/fetchList', async (_, { rejectWithValue }) => {
  try {
    const res = await Api.getData();
    return res.data;
  } catch (err) {
    return rejectWithValue([], err);
  }
});

const { reducer } = createSlice({
  name: 'cards',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchData.fulfilled]: (state, { meta, payload }) => {
      if (meta.requestId === state.currentRequestId.requestId) {
        state.entities = payload;
        state.loading = 'fin';
        state.currentRequestId = '';
      }
    },
    [fetchData.pending]: (state, { meta }) => {
      state.currentRequestId = meta;
      state.loading = 'pending';
    },
    [fetchData.rejected]: (state, { meta, payload, error }) => {
      if (state.currentRequestId === meta) {
        state.currentRequestId = meta;
        state.loading = 'fin';
        state.entities = payload;
        state.error = error;
      }
    },
  },
});
export default reducer;
