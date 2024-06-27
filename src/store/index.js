import {configureStore} from '@reduxjs/toolkit'
import sliceReducer from './mainSlice'

export default configureStore({
    reducer: sliceReducer
})