import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ApiStatus } from '@/types/common';
import { AddStockPayload, InventoryItem, UsagePayload } from '@/types/inventory';
import { addStock, fetchInventory, recordUsage } from '@/features/inventory/services/inventoryService';

interface InventoryState {
  items: InventoryItem[];
  status: ApiStatus;
  actionStatus: ApiStatus;
  error: string | null;
}

const initialState: InventoryState = {
  items: [],
  status: 'idle',
  actionStatus: 'idle',
  error: null
};

export const getInventoryThunk = createAsyncThunk('inventory/getAll', fetchInventory);
export const addStockThunk = createAsyncThunk('inventory/addStock', async (payload: AddStockPayload) => addStock(payload));
export const recordUsageThunk = createAsyncThunk('inventory/recordUsage', async (payload: UsagePayload) => recordUsage(payload));

const inventorySlice = createSlice({
  name: 'inventory',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getInventoryThunk.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getInventoryThunk.fulfilled, (state, action) => {
        state.status = 'success';
        state.items = action.payload;
      })
      .addCase(getInventoryThunk.rejected, (state, action) => {
        state.status = 'error';
        state.error = action.error.message ?? 'Unable to fetch inventory';
      })
      .addCase(addStockThunk.pending, (state) => {
        state.actionStatus = 'loading';
      })
      .addCase(addStockThunk.fulfilled, (state) => {
        state.actionStatus = 'success';
      })
      .addCase(addStockThunk.rejected, (state, action) => {
        state.actionStatus = 'error';
        state.error = action.error.message ?? 'Unable to add stock';
      })
      .addCase(recordUsageThunk.pending, (state) => {
        state.actionStatus = 'loading';
      })
      .addCase(recordUsageThunk.fulfilled, (state) => {
        state.actionStatus = 'success';
      })
      .addCase(recordUsageThunk.rejected, (state, action) => {
        state.actionStatus = 'error';
        state.error = action.error.message ?? 'Unable to record usage';
      });
  }
});

export const inventoryReducer = inventorySlice.reducer;
