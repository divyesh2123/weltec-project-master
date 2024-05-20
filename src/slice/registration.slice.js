import { createSlice } from '@reduxjs/toolkit'

const initialState = {
 
    isLoading: false,
    data: {},
    error : null
}

const registrationslice = createSlice({
  name: 'registration',
  initialState,
  reducers: {

    registrationRequest : (state,action)=>{

        state.isLoading = true;
    },
    registrationSuc : (state,action)=>{

        state.data = action.payload;
        state.isLoading = false;
    },
    registrationError : (state,action)=>{

        state.isLoading = false;
        state.error = action.payload;
    }

  }
});

export const {registrationRequest,registrationSuc,registrationError} = registrationslice.actions

export default registrationslice.reducer