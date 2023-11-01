import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../store";

type FetchPizzasSlice = {
    page: number;
    categoryId: number;
    sortingCategories: string;
    search: string;
}

type Pizza = {
    id: string;
    imageUrl: string;
    title: string;
    types: number[];
    sizes: number[];
    price: number;
}

// export enum Status {
//     LOADING = 'loading',
//     SUCCESS = 'success',
//     ERORR = 'error'
// }

interface PizzaSliceState {
    items: Pizza[];
    isLoading: string;
}

const initialState: PizzaSliceState = {
    items: [],
    isLoading: 'loading'
}


export const fetchPizzas = createAsyncThunk(
    'pizza/fetchPizzaStatus',
    async (params: FetchPizzasSlice) => {
        const { page,
            categoryId,
            sortingCategories,
            search } = params
        const { data } = await axios.get<Pizza[]>(`https://6426c8f9556bad2a5b57f240.mockapi.io/pizzas?page=${page}&limit=4&${categoryId > 0 ? `category=${categoryId}` : ''}&sortBy=${sortingCategories}&order=desc&search=${search ? search : ''}`)

        return data;
    }
)


export const pizzaSlice = createSlice({
    name: 'pizza',
    initialState,
    reducers: {
        setPizzaItems(state, action: PayloadAction<Pizza[]>) {
            state.items = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchPizzas.pending, (state) => {
            state.isLoading = 'loading';
            state.items = [];
        })

        builder.addCase(fetchPizzas.fulfilled, (state, action) => {
            state.isLoading = 'success'
            state.items = action.payload
        })

        builder.addCase(fetchPizzas.rejected, (state) => {
            state.isLoading = 'error'
            state.items = [];
        })
    },
})

export const selectPizzaItems = (state: RootState) => state.pizzaSlice.items;
export const selectIsLoading = (state: RootState) => state.pizzaSlice.isLoading;

export default pizzaSlice.reducer
export const { setPizzaItems } = pizzaSlice.actions