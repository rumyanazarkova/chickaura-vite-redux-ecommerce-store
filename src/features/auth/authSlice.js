import { createSlice } from '@reduxjs/toolkit';
import { useAuth0 } from '@auth0/auth0-react'; // Import Auth0 library

const initialState = {
  user: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logIn: (state, action) => {
      state.user = action.payload;
    },
    logOut: (state) => {
      state.user = null;
    },
  },
});

export const { logIn, logOut } = authSlice.actions;


export const fetchUser = () => async (dispatch) => {
  try {
    const { user } = useAuth0(); 
    dispatch(logIn(user)); 
  } catch (error) {
    console.error('Error fetching user data:', error);
  }
};

export default authSlice.reducer;
