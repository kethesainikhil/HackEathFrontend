import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loginApi, signUpApi } from "./authAPi";

const initialState = {
  userData:{

  }
};

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.
export const authApiSignupAsync = createAsyncThunk(
  "user/SignupAsync",
  async (data) => {
    const response = await signUpApi(data);
    // The value we return becomes the `fulfilled` action payload
    return response;
  }
);

export const authApiLoginAsync = createAsyncThunk(
  "user/LoginApiAsync",
  async (data) => {
   try{
    const response = await loginApi(data);
    // The value we return becomes the `fulfilled` action payload
    return response;
   }
   catch(error){
    return error
   }
  }
);

export const authSlice = createSlice({
  name: "user",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
    },
    logout : (state)=>{
      state.userData = null
    },
    decrement: (state) => {
      state.value -= 1;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
  // The `extraReducers` field lets the slice handle actions defined elsewhere,
  // including actions generated by createAsyncThunk or in other slices.
  extraReducers: (builder) => {
    builder
      .addCase(authApiSignupAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(authApiSignupAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.userData = action.payload;
      })
      .addCase(authApiLoginAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(authApiLoginAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.userData = action.payload;
      })
  },
});

export const { increment, logout, decrement, incrementByAmount } = authSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`

// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.

export default authSlice.reducer;
