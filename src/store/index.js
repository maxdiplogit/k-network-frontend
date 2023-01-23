import { createSlice, configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import {
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';


const initialContactsState = { contactsList: [], messagesList: [] };


const contactsSlice = createSlice({
    name: 'contacts',
    initialState: initialContactsState,
    reducers: {
        changeContactsList(currentState, action) {
            currentState.contactsList = action.payload;
        },
        changeMessagesList(currentState, action) {
            currentState.messagesList = action.payload;
        }
    }
});


const reducers = combineReducers({
    contacts: contactsSlice.reducer
});


const persistConfig = {
    key: 'root',
    storage
};


const persistedReducer = persistReducer(persistConfig, reducers);


const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
            }
        })
});


export const contactsActions = contactsSlice.actions;


export default store;