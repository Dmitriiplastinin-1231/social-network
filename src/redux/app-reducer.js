import { AuthMe } from "./auth-reducer";

const INITIALIZED_COMPLETE = 'my-app/app/INITIALIZED_COMPLETE';

let initialstate = {
    initialized: false
}

let appReducer = (state=initialstate, action) => {
    switch (action.type){
        case INITIALIZED_COMPLETE: {
            return {...state, initialized: true};
        }
        default: {
            return state
        }
    }
}

export const initializeCompliter = () => ({type: INITIALIZED_COMPLETE});

export const initializeApp = () => (dispatch) => {
    let AuthPromise = dispatch(AuthMe());
    Promise.all([AuthPromise])
      .then(() => {
        dispatch(initializeCompliter());

      })
}



export default appReducer;