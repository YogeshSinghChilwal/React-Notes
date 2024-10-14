//~ 5- creating a store for redux

import {configureStore} from '@reduxjs/toolkit'
import authSlice from './authSlice.js'

const store = configureStore({
    reducer:{
        auth: authSlice
    }
})

export default store