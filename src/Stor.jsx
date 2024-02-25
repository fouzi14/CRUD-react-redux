import { configureStore } from "@reduxjs/toolkit";
import userreducer from "./redux"
export  const store = configureStore({
    reducer :{
        users:userreducer,
    }
})