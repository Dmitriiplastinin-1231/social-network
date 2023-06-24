import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    messages: [
        { id: 1, message: 'Hi, my User!' },
        { id: 2, message: 'Hi.' },
        { id: 3, message: 'How are you' }
    ],
    dialogList: [
        { id: 1, name: 'Dmitriy Plastinin' },
        { id: 2, name: 'Daniil Belyaev' },
        { id: 3, name: 'Liza Saushkina' },
        { id: 4, name: 'Sasha Artimiev' },
        { id: 5, name: 'Egor Shinkoe' }
    ]
};

const dialogSlice = createSlice({
    name: 'messagesPage',
    initialState,
    reducers: {
        addMessage: (state, action) => {
            let newMessage = {
                id: 6,
                message: action.payload
            };
            state.messages.unshift(newMessage);
        }
    }
});

export var { addMessage } = dialogSlice.actions;
export default dialogSlice.reducer;