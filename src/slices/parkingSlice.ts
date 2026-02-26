import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ApiStatus } from '@/types/common';
import { ParkingOverview } from '@/types/parking';
import { fetchParkingOverview } from '@/features/parking/services/parkingService';

interface ParkingState {
  data: ParkingOverview | null;
  status: ApiStatus;
  error: string | null;
}

const initialState: ParkingState = { data: null, status: 'idle', error: null };

export const getParkingOverviewThunk = createAsyncThunk('parking/getOverview', fetchParkingOverview);

const parkingSlice = createSlice({
  name: 'parking',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getParkingOverviewThunk.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getParkingOverviewThunk.fulfilled, (state, action) => {
        state.status = 'success';
        state.data = action.payload;
      })
      .addCase(getParkingOverviewThunk.rejected, (state, action) => {
        state.status = 'error';
        state.error = action.error.message ?? 'Unable to load parking data';
      });
  }
});

export const parkingReducer = parkingSlice.reducer;
