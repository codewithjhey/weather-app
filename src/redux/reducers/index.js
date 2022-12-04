import { configureStore } from "@reduxjs/toolkit"
import mainReducer from "../reducers"

const favourites = configureStore({
  reducer: mainReducer
})

export default favourites
