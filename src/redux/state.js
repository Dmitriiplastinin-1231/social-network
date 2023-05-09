import profileReducer from "./profile-reducer";
import dialogReducer from './dialog-reducer';



let store = {
    _state: {
        profilePage:{
            posts: [
                {id: 1, message: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.'},
                {id: 2, message: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum  печати и вэб-дизайне является стандартной "рыбой" для текстов на латинице с начала XVI века.'},
                {id: 3, message: 'Как довести читателя до этой важной части, ради которой, собственно и затевалась вся история?'}
            ],
            textareaText: 'this post'
        },
        messagesPage: {
            messages: [
                {id: 1, message: 'Hi, my User!'},
                {id: 2, message: 'Hi.'},
                {id: 3, message: 'How are you'}
            ],
            messageTextarea: '',
            dialogList: [
                {id: 1, name: 'Dmitriy Plastinin'},
                {id: 2, name: 'Daniil Belyaev'},
                {id: 3, name: 'Liza Saushkina'},
                {id: 4, name: 'Sasha Artimiev'},
                {id: 5, name: 'Egor Shinkoe'}
              ]
        }
    },


    _callSubscriber(){
        
    },
    getState() {
        return this._state;
    },
    
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagesPage = dialogReducer(this._state.messagesPage, action);
        
        this._callSubscriber(this);
        
    }
}


export default store;