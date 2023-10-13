 import { configureStore } from "@reduxjs/toolkit";
import favoritesReducer from "../features/favorites/favoritesSlice";
import cartReducer from "../features/cart/cartSlice";
import filterReducer from "../features/filter/filterSlice";
import authReducer from "../features/auth/authSlice";

  import { apiSlice } from "../features/api/apiSlice";  


 const store=configureStore({
    reducer:{
      favorites:favoritesReducer,
      cart:cartReducer,
      filter:filterReducer,
      auth:authReducer,
       [apiSlice.reducerPath]:apiSlice.reducer , 
      
        
    }  ,
      middleware: getDefaultMiddleware=>getDefaultMiddleware().concat(apiSlice.middleware),    
     
    }) 

export default store

