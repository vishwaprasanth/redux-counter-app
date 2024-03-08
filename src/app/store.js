import { configureStore } from "@reduxjs/toolkit";
import counterReducers from "../features/counter/counterSlice";

export const Store =  configureStore({
    reducer:{
        counter : counterReducers

    }
})