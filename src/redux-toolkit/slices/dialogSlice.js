import { createSlice } from "@reduxjs/toolkit";
import { messageApi } from "../../api/api";

let initialState = {
    messages: [

    ],
    dialogList: []
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