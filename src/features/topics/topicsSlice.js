import {createSlice} from '@reduxjs/toolkit';
import {addQuizzThunk} from '../quizzes/quizzesSlice';

export const topicsSlice = createSlice({
    name: 'topics',
    initialState: {
        topics: {}
    },
    reducers: {
        addTopic: (state, action) => {
            state.topics[action.payload.id] = action.payload;
            state.topics[action.payload.id].quizIds = [];
        },
        addQuizId: (state, action) => {
            state.topics[action.payload.topicId].quizIds.push(action.payload.quizId);
        }
    },
});

export const topicSelector = (state) => {
    return state.topics.topics;
};

export const {addTopic, addQuizId} = topicsSlice.actions;

export const topicsSliceReducer = topicsSlice.reducer;
