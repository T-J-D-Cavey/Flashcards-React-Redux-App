import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {addQuizId} from '../topics/topicsSlice';

export const addQuizzThunk = ({id, name, topicId, cardIds}) => {        
    return (dispatch) => {
        dispatch(addQuiz({
            id: id,
            name: name,
            topicId: topicId,
            cardIds: cardIds
        }));
        dispatch(addQuizId({
            quizId: id,
            topicId: topicId,
        }));
    }
    };

export const quizzesSlice = createSlice({
    name: 'quizzes',
    initialState: {
        quizzes: {}
    },
    reducers: {
        addQuiz: (state, action) => {
        state.quizzes[action.payload.id] = action.payload;
        },
    },
});

export const quizzesSelector = (state) => {
    return state.quizzes.quizzes;
};

export const {addQuiz} = quizzesSlice.actions;

export const quizzesReducer = quizzesSlice.reducer;

