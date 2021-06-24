import { configureStore } from "@reduxjs/toolkit";
import photo from 'features/Photo/photoSlice';

const rootReducer = {
    photos: photo,
}

const store = configureStore({
    reducer: rootReducer,
});

export default store;