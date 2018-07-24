import { CHANGE_INPUT_VALUE, ADD_LIST_ITEM, DELETE_LIST_ITEM,} from './actionType';

const defaultState = {
    inputValue: '123',
    list: []
};
export default ((state = defaultState, action) => {
    if(action.type === CHANGE_INPUT_VALUE) {
        const newState = state;
        newState.inputValue = action.value;
        return newState;
    }
    if(action.type === ADD_LIST_ITEM) {
        const newState = state;
        newState.list = [...newState.list, action.item];
        newState.inputValue = '';
        return newState;
    }
    if(action.type === DELETE_LIST_ITEM){
        const newState = state;
        newState.list.splice(action.index,1);
        return newState;
    }
    return state;
})