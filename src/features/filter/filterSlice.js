import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    allProducts: [],
    filteredProducts: []
}

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        loadAllProducts: (state, action) => {
            const products = action.payload
            state.allProducts = products
            state.filteredProducts = products
        },

        sortByPriceLowest(state) {
            const products = [...state.filteredProducts]
            products.sort((a, b) => a.price - b.price);
            state.filteredProducts = products
        },
        sortByPriceHighest(state) {
            const products = [...state.filteredProducts]
            products.sort((a, b) => b.price - a.price);
            state.filteredProducts = products
        },
        sortByNewest(state) {
            const products = [...state.filteredProducts]
            products.sort((a, b) => {
                const dateA = new Date(a.date);
                const dateB = new Date(b.date);
                return dateB - dateA;
            });
            state.filteredProducts = products
        },
        filterBySize(state, action) {
            const chosenSize = action.payload

            if(chosenSize==='all'){
                state.filteredProducts=state.allProducts
            }else{
            const products = [...state.filteredProducts]
            const filteredProducts = products.filter((product) =>
            product.size.includes(chosenSize)
          );
        
          state.filteredProducts = filteredProducts;
            }
        },
        filterByType(state, action) {
            const chosenType = action.payload

            if(chosenType==='all'){
                state.filteredProducts=state.allProducts
            }else{
            const products = [...state.filteredProducts]
            const filteredProducts = products.filter((product) =>
            product.type.includes(chosenType)
          );
        
          state.filteredProducts = filteredProducts;
            }
        },
        filterByColor(state, action) {
            const chosenColor = action.payload 

            if(chosenColor==='all'){
                state.filteredProducts=state.allProducts
            }else{
            const products = [...state.filteredProducts]
            const filteredByColor = products.filter((product) => product.colors.hasOwnProperty(chosenColor)
              
            )      
        
          state.filteredProducts = filteredByColor;
            }
        },
    },
});










export const { loadAllProducts,
    sortByPriceLowest,
    sortByPriceHighest,
    sortByNewest,
    filterBySize,
    filterByType,
    filterByColor
} = filterSlice.actions

export default filterSlice.reducer