import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from '@/slices/authSlice';
import { parkingReducer } from '@/slices/parkingSlice';
import { inventoryReducer } from '@/slices/inventorySlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    parking: parkingReducer,
    inventory: inventoryReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
