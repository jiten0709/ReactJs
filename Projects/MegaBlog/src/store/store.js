import {configureStore} from '@reduxjs/toolkit'
import authSlce from './authSlice'

const store = configureStore({
    reducer: authSlce,
})

export default store