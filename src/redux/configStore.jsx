import {configureStore} from '@reduxjs/toolkit'
import phimReducer from './Reducers/phimReducer'

export const store = configureStore({
    
    reducer: {
        phimReducer: phimReducer
    }
})