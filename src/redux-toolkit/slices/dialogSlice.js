import { createSlice } from "@reduxjs/toolkit";
import { messageApi } from "../../api/api";

let initialState = {
    messages: [

    ],
    dialogList: [
        { id: 'f1ad1396-b448-4aa8-b966-79df56b01763', name: 'Dmitriy Plastinin' },
        { id: '3a9622c3-11b5-4952-b3ae-15629209fcdf', name: 'Daniil Belyaev' },
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
            state.messages.push(action.payload);
        },
        setMessages: (state, action) => {
            state.messages = action.payload;
        },
        setEditedMessage: (state, action) => {
            const thisMessage = state.messages.find(message => message.id === action.payload.messageId);
            thisMessage.text = action.payload.text;
        },
        setInterlocutors: (state, action) => {
            state.dialogList = action.payload;
        },
        delMessage: (state, action) => {
            state.messages = state.messages.filter(message => message.id !== action.payload);
        }
    }
});

export const sendMessage = (text, userId) => async dispatch => {
    const response = await messageApi.sendMessage(text, userId);

    if (response.message === 'Message seccessfully sended') {
        dispatch(addMessage(response.sendedMessage));
    } else {
        console.log(response.message, response.error);
    };
}

export const getMessages = (userId) => async dispatch => {
    const response = await messageApi.getCorrespondence(userId);

    if (response.message === 'Messages received') {
        dispatch(setMessages(response.messages));
    } else {
        console.log(response.message, response.error);
    };
};

export const editMessageText = (text, messageId) => async dispatch => {
    const response = await messageApi.editMessage(text, messageId);

    if (response.message === 'Message edited') {
        dispatch(setEditedMessage({ text, messageId }));
    } else {
        console.log(response.message, response.error);
    };
};

export const deleteMessage = (messageId) => async dispatch => {
    const response = await messageApi.deleteMessage(messageId);

    if (response.message === 'Deleted seccessfully') {
        dispatch(delMessage(messageId));
    } else {
        console.log(response.message, response.error);
    };
};

export const getInterlocutors = () => async dispatch => {
    const response = await messageApi.getInterlocutors();

    if (response.message === 'Interlocutors get seccussefuly') {
        dispatch(setInterlocutors(response.interlocutors));
    } else {
        console.log(response.message, response.error);
    };
}


export var {
    addMessage,
    setMessages,
    setEditedMessage,
    setInterlocutors,
    delMessage
} = dialogSlice.actions;
export default dialogSlice.reducer;