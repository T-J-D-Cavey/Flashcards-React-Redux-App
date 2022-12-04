import { configureStore } from "@reduxjs/toolkit";
import {topicsSliceReducer} from '../features/topics/topicsSlice';
import {quizzesReducer} from '../features/quizzes/quizzesSlice';
import {cardsReducer} from '../features/cards/cardsSlice';

export default configureStore({
  reducer: {
    topics: topicsSliceReducer,
    quizzes: quizzesReducer,
    cards: cardsReducer
  },
});
