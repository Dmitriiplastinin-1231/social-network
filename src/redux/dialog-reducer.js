
const ADD_MESSAGE = 'my-app/dialog/ADD_MESSAGE';

let initialState = {
    messages: [
        {id: 1, message: 'Hi, my User!'},
        {id: 2, message: 'Hi.'},
        {id: 3, message: 'How are you'}
    ],
    dialogList: [
        {id: 1, name: 'Dmitriy Plastinin'},
        {id: 2, name: 'Daniil Belyaev'},
        {id: 3, name: 'Liza Saushkina'},
        {id: 4, name: 'Sasha Artimiev'},
        {id: 5, name: 'Egor Shinkoe'}
      ]
}

const dialogReducer = (state = initialState, action) => {

    
    switch(action.type){
        case ADD_MESSAGE:{
            let newMessage = {
                id: `${action.messageId}_${state.messages.length + 1}`,
                message: action.newText
            }
            return {
                ...state,
                messages: [newMessage, ...state.messages]
            };
        }
        default:
            return state;
    }
    
}


export const addMessage = (newText, meId, userId) => ({type: ADD_MESSAGE, newText, messageId: `${meId}_${userId}`})

export default dialogReducer;