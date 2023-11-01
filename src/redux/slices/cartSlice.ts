import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store';

export type CartItem = {
    id: string;
    imageUrl: string;
    title: string;
    price: number;
    type: string;
    size: number;
    count: number;
}

interface CartSliceState {
    totalPrice: number;
    items: CartItem[];
}

const initialState: CartSliceState = {
    totalPrice: 0,
    items: []
}

export const cartSlice = createSlice({
    name: 'cartSlice',
    initialState,
    reducers: {
        addItems(state, action: PayloadAction<CartItem>) {
            const findItem = state.items.find(obj => obj.id === action.payload.id &&
                obj.type === action.payload.type &&
                obj.size === action.payload.size)

            if (findItem) {
                findItem.count++
            } else {
                state.items.push({
                    ...action.payload,
                    count: 1
                })
            }

            state.totalPrice = state.items.reduce((sum, obj) => {
                return (obj.price * obj.count) + sum;
            }, 0)
        },

        clickMinusItem(state, action: PayloadAction<CartItem>) {
            const findItem = state.items.find(obj => obj.id === action.payload.id &&
                obj.type === action.payload.type &&
                obj.size === action.payload.size)

            if (findItem && findItem.count > 1) {
                findItem.count--
            }


            state.totalPrice = state.items.reduce((sum, obj) => {
                return (obj.price * obj.count) + sum;
            }, 0)

        },

        removeItems(state, action: PayloadAction<CartItem>) {

            state.items = state.items.filter(obj => obj.id !== action.payload.id ||
                obj.type !== action.payload.type ||
                obj.size !== action.payload.size)

            state.totalPrice = state.items.reduce((sum, obj) => {
                return (obj.price * obj.count) + sum;
            }, 0)
        },

        clearItems(state) {
            state.items = [];
            state.totalPrice = 0
        }
    }
})

export const selectTotalPrice = (state: RootState) => state.cartSlice.totalPrice;
export const selectItems = (state: RootState) => state.cartSlice.items;

export default cartSlice.reducer
export const { addItems, removeItems, clearItems, clickMinusItem } = cartSlice.actions