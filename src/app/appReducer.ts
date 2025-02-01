import { newsApi } from "@/entities/news/api/newsApi"
import { combineReducers } from "@reduxjs/toolkit"
import newsReducer from '@/entities/news/model/news-slice'
import { categoriesApi } from "@/entities/category/api/categoriesApi"

export const rootReducer = combineReducers({
    news: newsReducer,
    [newsApi.reducerPath]: newsApi.reducer,
    [categoriesApi.reducerPath]: categoriesApi.reducer,
})