import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { mockLogin } from '@/services/authService';
import { ApiStatus } from '@/types/common';
import { UserRole } from '@/types/auth';

interface AuthState {
  token: string | null;
  role: UserRole;
  status: ApiStatus;
  error: string | null;
}

const initialState: AuthState = {
  token: null,
  role: 'SOCIETY_ADMIN',
  status: 'idle',
  error: null
};

export const loginThunk = createAsyncThunk('auth/login', async (email: string) => mockLogin(email));

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.token = null;
      state.role = 'RESIDENT';
    },
    setRole: (state, action: PayloadAction<UserRole>) => {
      state.role = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginThunk.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(loginThunk.fulfilled, (state, action) => {
        state.status = 'success';
        state.token = action.payload.token;
        state.role = action.payload.role;
      })
      .addCase(loginThunk.rejected, (state, action) => {
        state.status = 'error';
        state.error = action.error.message ?? 'Login failed';
      });
  }
});

export const { logout, setRole } = authSlice.actions;
export const authReducer = authSlice.reducer;
