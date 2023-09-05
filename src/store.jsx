// Using redux toolkit
import { configureStore } from '@reduxjs/toolkit';
// Configure store does:
// automatically combines reducers
// automatically set up developer tools
// Automatically add thunk middleware

// Import the reducers from the slices
import accountReducer from './features/accounts/accountSlice';
import customerReducer from './features/customers/customerSlice';

const store = configureStore({
  reducer: {
    account: accountReducer,
    customer: customerReducer,
  },
});

export default store;
