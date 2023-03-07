import { combineReducers, configureStore } from "@reduxjs/toolkit";
import riderSlice from "../features/riders/riderSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";
import bikeSlice from "../features/bikeSlice";

const persistConfig = {
    key: "root",
    storage,
};

const rootReducer = combineReducers({
    rider: riderSlice,
    bike: bikeSlice,
})

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== "production",
    middleware: [thunk],
});

export const persistor = persistStore(store);
