import dialogReducer, { addMessage } from './dialog-reducer';
let someText = 'some text';


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



test('new length after sent messages', ()=>{
    let action = addMessage(someText);
    let newStateWithOneNewMessage = dialogReducer(initialState, action);

    expect(newStateWithOneNewMessage.messages.length).toBe(4);
})

test('inner in the sent message', ()=>{
    let action = addMessage(someText);
    let newStateWithOneNewMessage = dialogReducer(initialState, action);

    expect(newStateWithOneNewMessage.messages[0].message === someText).toBe(true);
})

test('different id', () => {
    let action = addMessage(someText, 123, 321);
    let newStateWithOneNewMessage = dialogReducer(initialState, action);
    let actionTwo = addMessage(someText, 123, 321);
    let newStateWithTwoNewMessage = dialogReducer(newStateWithOneNewMessage, actionTwo);

    let result = newStateWithTwoNewMessage.messages.filter((elem, ind, arr) => {
        return arr.some((secondElem, secondElemInd) => {
            if (!(ind === secondElemInd)){
                return elem.id === secondElem.id
            }
        })
    })
    
    expect(result.length).toBe(0)
})