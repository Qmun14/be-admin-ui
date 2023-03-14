import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getMe, loginUser, logoutUser } from '../../api/users';

const initialState = {
    user: null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}

export const LoginUser = createAsyncThunk('user/LoginUser', async (user, thunkAPI) => {
    try {
        const response = await loginUser({
            email: user.email,
            password: user.password
        });
        return response.data
    } catch (err) {
        if (err.response) {
            const message = err.response.data.message;
            return thunkAPI.rejectWithValue(message);
        }
    }
})

export const getMeApi = createAsyncThunk('user/getMeApi', async (_, thunkAPI) => {
    try {
        const response = await getMe();
        return response.data
    } catch (err) {
        if (err.response) {
            const message = err.response.data.message;
            return thunkAPI.rejectWithValue(message);
        }
    }
})

export const LogOut = createAsyncThunk('user/LogOut', async () => {
    await logoutUser();
})

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        reset: state => initialState
    },
    extraReducers: (builder) => {
        builder.addCase(LoginUser.pending, (state) => {
            state.isLoading = true
        });
        builder.addCase(LoginUser.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.user = action.payload
        });
        builder.addCase(LoginUser.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
        });

        // Get User Login
        builder.addCase(getMeApi.pending, (state) => {
            state.isLoading = true
        });
        builder.addCase(getMeApi.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.user = action.payload
        });
        builder.addCase(getMeApi.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
        });
    }
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;