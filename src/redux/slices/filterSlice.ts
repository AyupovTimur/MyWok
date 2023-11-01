import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store';

// export enum Sorting {
//   RATING = 'rating',
//   TITLE = 'title',
//   PRICE = 'price'
// } 

interface FilterSliceState {
  search: string;
  page: number;
  categoryId: number;
  sortingBy: string;
  sortingCategories: string;
}

const initialState: FilterSliceState = {
  search: '',
  page: 1,
  categoryId: 0,
  sortingBy: 'популярности',
  sortingCategories: 'rating'
}

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setCategoryId(state, action: PayloadAction<number>) {
      state.categoryId = action.payload
    },
    setSortingBy(state, action: PayloadAction<string>) {
      state.sortingBy = action.payload
    },
    setSortingCategories(state, action: PayloadAction<string>) {
      state.sortingCategories = action.payload
    },
    setPage(state, action: PayloadAction<number>) {
      state.page = action.payload
    },
    setSearch(state, action: PayloadAction<string>) {
      state.search = action.payload
    },
  },
})

export const selectCategoryId = (state: RootState) => state.filterSlice.categoryId;
export const selectSortingCategories = (state: RootState) => state.filterSlice.sortingCategories;
export const selectPage = (state: RootState) => state.filterSlice.page;
export const selectSearch = (state: RootState) => state.filterSlice.search;
export const selectSortingBy = (state: RootState) => state.filterSlice.sortingBy;

export const { setCategoryId, setSortingBy, setSortingCategories, setSearch, setPage } = filterSlice.actions
export default filterSlice.reducer