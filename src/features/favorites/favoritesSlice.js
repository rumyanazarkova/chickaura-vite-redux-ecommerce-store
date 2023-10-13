import { createSlice } from '@reduxjs/toolkit'

const getLocalStorage = () => {
    let favorites = localStorage.getItem('favorites');  
    if(favorites){
      return JSON.parse(favorites)
    } else {
      return []
    }
  }

const initialState = {
    favItems: getLocalStorage(),
    allFavorites:0
}

export const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        addFav: (state, action) => {
            const newItem = action.payload;
            const isDuplicate = state.favItems.some((item) => item.id === newItem.id);

            if (!isDuplicate) {
                state.allFavorites += 1;
                state.favItems.push(newItem);
                localStorage.setItem('favorites', JSON.stringify(state.favItems));
            }
        },
        removeFav: (state, action) => {
            const itemToRemove = action.payload;
console.log('itemtoremove',itemToRemove.id);
            const itemIndex = state.favItems.findIndex((item) => item.id === itemToRemove.id);

            if (itemIndex !== -1) {
                state.allFavorites -= 1;
                state.favItems.splice(itemIndex, 1); 
                localStorage.setItem('favorites', JSON.stringify(state.favItems));
            }
        },
        clearAllFavs:(state)=>{
            localStorage.setItem('favorites', []);
            state.favItems = [];
            state.allFavorites = 0;
        }
   

    }
})


export const { addFav, removeFav,clearAllFavs } = favoritesSlice.actions

export default favoritesSlice.reducer