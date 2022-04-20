import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import { PersistGate } from "redux-persist/integration/react";
import thunk from "redux-thunk";
import { persistReducer } from "redux-persist";
import locationSlice from "./slice/location-slice";
//reducers
const reducers = combineReducers({
  location: locationSlice,
});

//persist config
const persistConfig = {
  key: "rootRedux",
  storage,
};

//persist reducer
const persistedReducer = persistReducer(persistConfig, reducers);

//store
export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk],
});
